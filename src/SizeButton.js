import React from "react";

export class SizeButton extends React.Component {
  get classNames() {
    if (this.props.clicked) {
      return 'selected'
    }

    return ""
  }

  render() {
    const { children, onClick } = this.props;
    return (

      <div className={`size-circles ${this.classNames}`}
          type="button"
          onClick={onClick}>
          {children}
          <a href="#" className="circle s37"><strong>37</strong></a>
          <a href="#" className="circle s38"><strong>38</strong></a>
          <a href="#" className="circle s39"><strong>39</strong></a>
          <a href="#" className="circle s40 na"><strong>40</strong></a>
          <a href="#" className="circle s41"><strong>41</strong></a>
     </div>
    );
  }
}

// export class SizeButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       clicked: true,
//     }
//   };

//   handleClick = () => {
//     this.setState({
//     clicked: !this.state.clicked
//     });
//   }

//   render() {
//     return (
//       <div className="size-circles">
//             <p className={`circle s37 ${this.state.clicked ? null : 'selected'}`}
//             onClick={this.handleClick}>
//             <strong>37</strong></p>
//             <p className="circle s38"
//             onClick={this.handleClick}>
//             <strong>38</strong></p>
//             <p className="circle s39"
//             onClick={this.handleClick}><strong>39</strong></p>
//             <p className="circle s40 na"
//             OnClick={this.handleClick}><strong>40</strong></p>
//             <p className="circle s41"
//             onClick={this.handleClick} ><strong>41</strong></p>
//       </div>
//     );
//   }
// }


// import React, { Component } from 'react';

// const { Component } = React;
