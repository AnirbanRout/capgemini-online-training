import { Component } from "react";

export default class LiveInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <>
        <h2>Input value</h2>
        <input
          type="text"
          name=""
          id=""
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <p>value:{this.state.inputValue}</p>
      </>
    );
  }
}
