import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-6 text-center">
          <div className="max-w-md w-full bg-white/90 backdrop-blur rounded-3xl p-8 shadow-xl border border-orange-100">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-2">
              Algo inesperado aconteceu
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Ocorreu um erro ao carregar a página. Tenta recarregar para continuar a usar o Abana o Jantar.
            </p>
            {this.state.error?.message && (
              <pre className="text-xs bg-gray-100 text-gray-700 p-3 rounded-xl mb-6 overflow-x-auto text-left">
                {this.state.error.message}
              </pre>
            )}
            <Button
              onClick={this.handleReload}
              className="w-full h-12 rounded-full font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md hover:shadow-lg transition"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Recarregar Aplicação
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
