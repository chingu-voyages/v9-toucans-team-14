import React from 'react';

import { ColorButton } from './ColorButton';

export class ColorButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorbuttons: [
        {
          id: 1,
          name: 'black',
          clicked: true
        },
        {
          id: 2,
          name: 'white',
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

    return colorbuttons.map(({ name, clicked, id }) => (
      <ColorButton
        key={id}
        name={name}
        clicked={clicked}
        onClick={() => this.handleClicked(id)}
      />
    ));
  }

  render() {
    return <div className="colour-btns-set1">{this.colorbuttons}</div>;

  }
}
