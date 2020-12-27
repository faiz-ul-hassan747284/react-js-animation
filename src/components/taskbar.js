import React from "react";
class Taskbar extends React.Component {
  constructor() {
    super();
    this.state = { opacity: 1, isAdd: false };
  }
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "yellow",
            width: "100%",
            opacity: this.state.opacity
          }}
          align="center"
        >
          <h1>Task 2</h1>
        </div>
      </div>
    );
  }
  componentDidMount() {
    setInterval(this.changeOpacity.bind(this), 100);
  }

  changeOpacity() {
    if (this.state.opacity === 1) {
      this.setState({ isAdd: false });
    }
    if (this.state.opacity <= 0) {
      this.setState({ isAdd: true });
    }
    if (this.state.isAdd) {
      this.setState({ opacity: this.state.opacity + 0.01 });
    } else {
      this.setState({ opacity: this.state.opacity - 0.01 });
    }
  }
}

export default Taskbar;
