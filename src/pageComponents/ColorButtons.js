import React from 'react';

import { ColorButton } from './ColorButton';


export class ColorButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorbuttons: [
        {
          id: 1,
          colors: ['white'],
          clicked: true
        },
        {
          id: 2,
          colors: ['black'],
          clicked: false
        },
        {
          id: 3,
          colors: ['red'],
          clicked: false
        },
        {
          id: 4,
          colors: ['white', 'brown'],
          clicked: false
        },
        {
          id: 5,
          colors: ['black', 'brown'],
          clicked: false
        }
      ]
    };
  }

  handleClicked(id) {
    this.setState(prevState => {
      const colorbuttons = prevState.colorbuttons.map(colorbutton => {
        if (colorbutton.id === id) {
          return { ...colorbutton, clicked: true };
        }

        return { ...colorbutton, clicked: false };
      });

      // same as { buttons: buttons }
      return { colorbuttons };
    });
  }

  /**
   * Getter method, Read Only
   */
  get colorbuttons() {
    const { colorbuttons } = this.state;

    return colorbuttons.map(({ id, colors, clicked }) => (
      <ColorButton
        key={id}
        colors={colors}
        clicked={clicked}
        onClick={() => this.handleClicked(id)}
      />
    ));
  }

  get images() {

  }

  render() {
    return <div className="colour-btns-set2">{this.colorbuttons}</div>;
  }
}
