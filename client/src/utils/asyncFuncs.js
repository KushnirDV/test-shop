import React from 'react';
import { ErrorBoundary } from './errorBoundary';

class Async extends React.Component{
    constructor(props){
        super(props);
        this. state = {
          Component: void 0,
        }
    } 

    componentDidMount(){
      this.props.provider()
        .then(res => {
          this.setState({ Component: res.default }); 
        })
        .catch(error => {
          if (error.toString().indexOf('ChunkLoadError') > -1) {
            console.log('[ChunkLoadError] Reloading due to error');
            window.location.reload(true);
          }
        })
    }

    render() {
      const { Component } = this.state;
      return(
        <ErrorBoundary>
          {Component ? <Component {...this.props.props}/> : null}
        </ErrorBoundary>
      )
    }
  }



export default Async;