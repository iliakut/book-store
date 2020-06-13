import React, {Component} from 'react';
import ErrorIndicator from "../errorIndicator/errorIndicator";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.hasError
          ? <ErrorIndicator/>
          : this.props.children
        }
      </React.Fragment>
    );
  }
}

export default ErrorBoundary;