import React from 'react';

export class ColorButton extends React.Component {
  get classNames() {
    const { clicked, name } = this.props;

    if (clicked) {
      return `black btn active ${name}`;
      return `white btn ${name}`;

    }

    return `black btn ${name}`;
    return `white btn ${name}`;
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
