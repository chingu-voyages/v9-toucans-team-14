import React from 'react';
import './App.css';
import './assets/stylesheets/components/banner/right-banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeButton } from './SizeButton';

export class RightBanner extends React.Component {
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
    // setState for sizebuttons
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
    return (
      <div className="wrapper">
        <div className="size-wrapper">
          <div>
            <p>
              <strong>SIZE</strong>
            </p>
          </div>
          <div className="size-circles">{this.sizebuttons}</div>
        </div>
        <div className="reviews-wrapper">
          <div>
            <p>
              <strong>REVIEWS</strong>
            </p>
          </div>
          <div className="star-icons">
            <FontAwesomeIcon icon={['fas', 'star']} />
            <FontAwesomeIcon icon={['fas', 'star']} />
            <FontAwesomeIcon icon={['fas', 'star']} />
            <FontAwesomeIcon icon={['fas', 'star']} />
            <FontAwesomeIcon icon={['far', 'star']} />
          </div>
        </div>
        <div className="price-wrapper">
          <div>
            <p className="price">
              <strong>PRICE</strong>
            </p>
          </div>
          <div>
            <p>
              <strong>$450</strong>
            </p>
          </div>
        </div>
        <div className="colour-wrapper-set1">
          <p>
            <strong>COLOUR</strong>
          </p>
          <div className="colour-btns-set1">
            <a href="btn" className="btn-color-black active" />
            <a href="btn" className="btn-color-white" />
          </div>
        </div>
        <div className="colour-wrapper-set2">
          <p>
            <strong>COLOUR</strong>
          </p>
          <div className="colour-btns-set2">
            <a href="btn" className="btn-color-red" />
            <a href="btn" className="btn-color-white-brown selected" />
            <a href="btn" className="btn-color-black-brown" />
          </div>
        </div>
      </div>
    );
  }
}
