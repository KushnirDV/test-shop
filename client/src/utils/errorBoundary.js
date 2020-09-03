import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      console.log(error);
      console.info(info);
      console.trace();
    }
  
    render() {
      if (this.state.hasError) {
        if(this.props.errorView){
            return this.props.errorView;
        }else{
            return <div>Something went wrong.</div>;
        }
      }
  
      return this.props.children;
    }
}