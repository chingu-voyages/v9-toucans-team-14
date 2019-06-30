import React from "react";

export class SizeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false}
  };

  handleClick = () => {
    this.setState({
    clicked: !this.state.clicked
  });
  }

  render() {
    return (
      <div className="size-circles">
            <p className={`circle s37 ${this.state.clicked ? 'selected': null}`}
            onClick={this.handleClick}>
            <strong>37</strong></p>
            <p className={`circle s38 ${this.state.clicked ? 'selected': null}`}
            onClick={this.handleClick}>
            <strong>38</strong></p>
            <p className="circle s39"><strong>39</strong></p>
            <p className="circle s40 na"><strong>40</strong></p>
            <p className="circle s41"><strong>41</strong></p>
      </div>
 );
  }
}
