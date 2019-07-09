import React from 'react';

export class ColorButton extends React.Component {
  get classNames() {
    const { clicked, name } = this.props;

    if (clicked) {
      return `btn-color-${name} active`;
    }

    return `btn-color-${name}`;
  }

  render() {
    const { onClick, name } = this.props;
    return (
      <button type="button" className={this.classNames} onClick={onClick}>
        {name}
      </button>

    );
  }
}
