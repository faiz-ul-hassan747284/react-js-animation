import React from "react";
import Bubble from "./bubble";
class BubbleController extends React.Component {
  constructor() {
    super();
    this.state = { noOfBubbles: 0 };
  }
  render() {
    const bubbles = [];
    for (let i = 0; i < this.state.noOfBubbles; i++) {
      bubbles.push(<Bubble props={this.removeBubble.bind(this)} />);
    }
    return (
      <div align="Center" style={{ width: "80%" }}>
        <p>current Bubbles: {this.state.noOfBubbles}</p>
        {bubbles}
      </div>
    );
  }

  componentDidMount() {
    this.generateRandomBubbles();
    setInterval(this.regenerate.bind(this), 500);
  }
  removeBubble() {
    this.setState({ noOfBubbles: this.state.noOfBubbles - 1 });
  }
  regenerate() {
    if (this.state.noOfBubbles === 0) {
      this.generateRandomBubbles();
    }
  }
  generateRandomBubbles() {
    this.setState({ noOfBubbles: Math.floor(7 * Math.random() + 3) });
  }
}
export default BubbleController;
