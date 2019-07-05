import React from 'react';

import { SizeButton } from './SizeButton';

export class SizeButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sizebuttons: [
        {
          id: 1,
          name: '37',
          clicked: true
        },
        {
          id: 2,
          name: '38',
          clicked: false
        },
        {
          id: 3,
          name: '39',
          clicked: false
        },
        {
          id: 4,
          name: '40',
          clicked: false
        },
        {
          id: 5,
          name: '41',
          clicked: false
        }
      ]
    };
  }

  handleClicked(id) {
    this.setState(prevState => {
      const sizebuttons = prevState.sizebuttons.map(sizebutton => {
        if (sizebutton.id === id) {
          return { ...sizebutton, clicked: true };
        }

        return { ...sizebutton, clicked: false };
      });

      // same as { buttons: buttons }
      return { sizebuttons };
    });
  }

  /**
   * Getter method, Read Only
   */
  get sizebuttons() {
    const { sizebuttons } = this.state;

    return sizebuttons.map(({ name, clicked, id }) => (
      <SizeButton
        key={id}
        name={name}
        clicked={clicked}
        onClick={() => this.handleClicked(id)}
      />
    ));
  }

  render() {
    return <div className="size-circles">{this.sizebuttons}</div>;
  }
}
