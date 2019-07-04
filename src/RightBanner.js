import React from "react";
import "./App.css";
import "./assets/stylesheets/components/banner/right-banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizeButton } from "./SizeButton";


export class RightBanner extends React.Component {

    constructor(props) {
    super(props);

    this.state = {
      buttons: [
        {
          id: 1,
          name: 'circle s37',
          clicked: true
        },
        {
          id: 2,
          name: 'circle s38',
          clicked: false
        },
        {
          id: 3,
          name: 'circle s39',
          clicked: false
        },
        {
          id: 4,
          name: 'circle s40',
          clicked: false
        },
        {
          id: 4,
          name: 'circle s41',
          clicked: false
        },
      ]
    };
  }

  handleClicked(id) {
    this.setState(prevState => {
      const buttons = prevState.buttons.map(
        (button) => {
          if (button.id === id) {
            return { ...button, clicked: true }
          }

          return { ...button, clicked: false }
        }
      );

      // same as { buttons: buttons }
      return { buttons }
    })
  }

//   /**
//    * Getter method, Read Only
//    */
  get buttons() {
    const { buttons } = this.state;

    return buttons.map(
      ({ name, clicked, id}) => (
        <SizeButton
          key={id}
          clicked={clicked}
          onClick={
            () => this.handleClicked(id)
          }
        >
          {name}
        </SizeButton>
      )
    )
  }

  render() {
    return (
      <div className="wrapper">
        <div className="size-wrapper">
          <div>
            <p><strong>SIZE</strong></p>
          </div>
          <div>
            <SizeButton buttons={this.buttons}/>
          </div>
        </div>
        <div className="reviews-wrapper">
          <div>
            <p><strong>REVIEWS</strong></p>
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
            <p className="price"><strong>PRICE</strong></p>
          </div>
          <div>
            <p><strong>$450</strong></p>
          </div>
        </div>
        <div className="colour-wrapper-set1">
          <p><strong>COLOUR</strong></p>
          <div className="colour-btns-set1">
            <a href="btn" className="btn-color-black selected">
            </a>
            <a href="btn" className="btn-color-white">
            </a>
          </div>
        </div>
        <div className="colour-wrapper-set2">
          <p><strong>COLOUR</strong></p>
          <div className="colour-btns-set2">
            <a href="btn" className="btn-color-red">
            </a>
            <a href="btn" className="btn-color-white-brown selected">
            </a>
            <a href="btn" className="btn-color-black-brown">
            </a>
          </div>
        </div>
      </div>
    );
  }
}


// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       buttons: [
//         {
//           id: 1,
//           name: 'Button 1',
//           clicked: true
//         },
//         {
//           id: 2,
//           name: 'Button 2',
//           clicked: false
//         },
//         {
//           id: 3,
//           name: 'Button 3',
//           clicked: false
//         },
//         {
//           id: 4,
//           name: 'Button 4',
//           clicked: false
//         },
//       ]
//     };
//   }

//   handleClicked(id) {
//     this.setState(prevState => {
//       const buttons = prevState.buttons.map(
//         (button) => {
//           if (button.id === id) {
//             return { ...button, clicked: true }
//           }

//           return { ...button, clicked: false }
//         }
//       );

//       // same as { buttons: buttons }
//       return { buttons }
//     })
//   }

//   /**
//    * Getter method, Read Only
//    */
//   get buttons() {
//     const { buttons } = this.state;

//     return buttons.map(
//       ({ name, clicked, id}) => (
//         <Button
//           key={id}
//           clicked={clicked}
//           onClick={
//             () => this.handleClicked(id)
//           }
//         >
//           {name}
//         </Button>
//       )
//     )
//   }

//   render() {
//     return(
//       <div>
//         {this.buttons}
//       </div>
//     );
//   }
// }


