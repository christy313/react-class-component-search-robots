import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorInfo: info });
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong here!</div>;
    }
    return this.props.children;
  }
}
