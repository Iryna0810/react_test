import React, { Component } from "react";
import css from '../Counter/counter.css'

export class Toggle extends Component {
  state = { isOpen: false };

  show = () => this.setState({ isOpen: true });

  hide = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div className="counter__controls">
        <button type='button' className="btn btn-primary btn-lg" onClick={this.show}>Show</button>
        <button type='button' className="btn btn-primary btn-lg" onClick={this.hide}>Hide</button>
        {isOpen && children}
      </div>
    );
  }
}