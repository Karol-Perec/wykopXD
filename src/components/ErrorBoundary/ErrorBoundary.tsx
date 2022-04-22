import { Component, ErrorInfo, PropsWithChildren } from 'react';
import ErrorMessage from 'components/UI/ErrorMessage';

type ErrorBoundaryProps = PropsWithChildren<unknown>;

interface ErrorBoundaryState {
  hasError: boolean;
  error: unknown;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error: ', error, errorInfo);
  }

  public render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) return <ErrorMessage error={error} />;

    return children;
  }
}

export default ErrorBoundary;
