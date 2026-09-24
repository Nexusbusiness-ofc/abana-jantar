import { useEffect, useRef } from 'react';

/**
 * High-precision shake detector using DeviceMotionEvent.
 * Supports:
 * - Linear acceleration (gravity excluded by device OS)
 * - Gravity compensation fallback (subtracting 9.8m/s^2)
 * - Peak & reversal detection across 600ms window
 * - Threshold tuned for natural one-handed shaking
 */
export function useShake(onShake, opts = {}) {
  const enabled = opts.enabled ?? true;
  const threshold = opts.threshold ?? 12; // m/s^2
  const intervalMin = opts.intervalMin ?? 700; // ms between triggers
  const requiredPeaks = opts.requiredPeaks ?? 2; // oscillations back and forth

  const lastTrigger = useRef(0);
  const peakCount = useRef(0);
  const lastPeakTime = useRef(0);
  const lastSign = useRef(0);
  const cbRef = useRef(onShake);
  cbRef.current = onShake;

  useEffect(() => {
    if (typeof window === 'undefined' || !enabled) return;

    const onMotion = (event) => {
      const now = Date.now();
      if (now - lastTrigger.current < intervalMin) return;

      let x = 0, y = 0, z = 0;
      let mag = 0;

      // Prefer linear acceleration (excluding gravity)
      if (event.acceleration && (event.acceleration.x !== null || event.acceleration.y !== null)) {
        x = event.acceleration.x || 0;
        y = event.acceleration.y || 0;
        z = event.acceleration.z || 0;
        mag = Math.sqrt(x * x + y * y + z * z);
      } else if (event.accelerationIncludingGravity) {
        // Fallback: gravity is included (~9.8 m/s^2)
        x = event.accelerationIncludingGravity.x || 0;
        y = event.accelerationIncludingGravity.y || 0;
        z = event.accelerationIncludingGravity.z || 0;
        const total = Math.sqrt(x * x + y * y + z * z);
        mag = Math.abs(total - 9.8);
      }

      // Check if acceleration intensity crosses the shake threshold
      if (mag > threshold) {
        // Find dominant direction on X/Y/Z axis
        const sign = (Math.abs(x) > Math.abs(y) ? x : y) > 0 ? 1 : -1;

        if (now - lastPeakTime.current > 500) {
          peakCount.current = 1;
          lastSign.current = sign;
        } else if (lastSign.current !== sign) {
          // Reversal detected (shaking back and forth)
          peakCount.current += 1;
          lastSign.current = sign;
        } else {
          peakCount.current += 1;
        }

        lastPeakTime.current = now;

        if (peakCount.current >= requiredPeaks) {
          peakCount.current = 0;
          lastTrigger.current = now;
          if (cbRef.current) {
            cbRef.current();
          }
        }
      }
    };

    window.addEventListener('devicemotion', onMotion, { passive: true });

    return () => {
      window.removeEventListener('devicemotion', onMotion);
    };
  }, [enabled, threshold, intervalMin, requiredPeaks]);
}

/**
 * Request motion sensor permission for iOS 13+ and modern browsers.
 */
export async function requestMotionPermission() {
  if (
    typeof DeviceMotionEvent !== 'undefined' &&
    typeof DeviceMotionEvent.requestPermission === 'function'
  ) {
    try {
      const res = await DeviceMotionEvent.requestPermission();
      return res === 'granted';
    } catch (e) {
      console.warn('Permissão de acelerómetro:', e);
      return false;
    }
  }
  return true;
}

/**
 * Checks whether the environment supports motion sensors and is a Secure Context.
 */
export function checkMotionSupport() {
  if (typeof window === 'undefined') return { supported: false, secure: false };
  const secure =
    window.isSecureContext ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';
  const supported = typeof window.DeviceMotionEvent !== 'undefined';
  return { supported, secure };
}