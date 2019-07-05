import React from 'react';

export class ColorButton extends React.Component {
  get classNames() {
    const { clicked, id } = this.props;

    if (clicked) {
      return `color-btn black active ${id}`;
      return `color-btn white active ${id}`;

    }

    return `color-btn black ${id}`;
    return `color-btn white ${id}`;
  }

  render() {
    const { onClick, id } = this.props;
    return (
      <button type="button" className={this.classNames} onClick={onClick}>
        {id}
      </button>

    );
  }
}
