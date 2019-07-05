import React from "react";
import "./App.css";
import "./assets/stylesheets/components/banner/right-banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeButton } from "./SizeButton";

export class RightBanner extends React.Component {
    constructor(props) {
    super(props);
     handleClicked(id) {
    this.setState(prevState => {
      const buttons = prevState.buttons.map(button => {
        if (button.id === id) {
          return { ...button, clicked: true };
        }

        return { ...button, clicked: false };
      });

      // same as { buttons: buttons }
      return { buttons };
    });
  }

  //   /**
  //    * Getter method, Read Only
  //    */
  get buttons() {
    const { buttons } = this.state;

    return buttons.map(({ name, clicked, id }) => (
      <SizeButton
        key={id}
        clicked={clicked}
        onClick={() => this.handleClicked(id)}
      >
        {name}
      </SizeButton>
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
          
          <div>
            <SizeButton buttons={this.buttons} />
            {this.state.buttons.map(item => {
              return (
                <div key={item.id}>
                  <input
                    type="radio"
                    name="myRadio"
                    checked={this.state.selectedRadio === item.id}
                  />
                  <label onClick={this.select.bind(this, item.id)}>
                    {item.name}
                    <span />
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="reviews-wrapper">
          <div>
            <p>
              <strong>REVIEWS</strong>
            </p>
          </div>
          <div className="star-icons">
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["far", "star"]} />
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
            <a href="btn" className="btn-color-black selected" />
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
