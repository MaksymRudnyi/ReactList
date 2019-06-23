import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  state = {
    didCatch: false,
  };

  componentDidCatch() {
    this.setState({ didCatch: true });
  }

  render() {
    return this.state.didCatch ? null : this.props.children;
  }
}
