import { Component, PropsWithChildren } from 'react';
import ErrorMessage from 'components/UI/ErrorMessage';

interface ErrorBoundaryState {
  hasError: boolean;
  error: unknown;
}

class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) return <ErrorMessage error={error} />;

    return children;
  }
}

export default ErrorBoundary;
