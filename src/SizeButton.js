import React from 'react';

export class SizeButton extends React.Component {
  get classNames() {
    const { clicked, name } = this.props;

    if (clicked) {
      return `circle ${name} selected`;
    }

    return `circle ${name}`;
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
