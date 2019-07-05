import React from 'react';

export class ColorButton extends React.component {
  get classNames() {
    const { clicked, name } = this.props;

    if (clicked) {
      return `btn-color-{$name} selected`;
    }

    return `btn-color-{$name}`;
  }

  render() {
    const { onClick, name } = this.props;
    return (
      <button type="button" className={this.classNames} onClick={onClick} >
        {name}
      </button>)
  }
}
