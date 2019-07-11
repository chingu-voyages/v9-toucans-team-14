import React from 'react';

export class ColorButton extends React.Component {
  get classNames() {
    const { clicked, colors } = this.props;

    const colorClass = colors.join('-');

    if (clicked) {
      return `color-btn ${colorClass} active`;
    }

    return `color-btn ${colorClass}`;
  }

  render() {
    const { onClick, colors } = this.props;
    return (
      <button type="button" className={this.classNames} onClick={onClick}>
        <div className="sr-only">{colors.join('/')}</div>
      </button>
    );
  }
}
