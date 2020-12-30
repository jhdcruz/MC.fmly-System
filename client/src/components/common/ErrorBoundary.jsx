/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { Component } from 'react';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/img/logo.svg';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            width: 'max-content',
            textAlign: 'center',
            margin: '20vh auto',
            color: 'whitesmoke',
            backgroundColor: '#222126',
            boxShadow: '3px 3px 8px #1b1b1b',
            borderRadius: '0.5rem',
            padding: '1.5rem'
          }}
        >
          <Image src={logo} width={200} height={200} />
          <h3>Something went wrong.</h3>
          <h6>Please try again later or inform the System Admin.</h6>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
