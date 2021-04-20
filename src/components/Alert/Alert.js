import React, { Component } from "react";

let id;
class Alert extends Component {
  disableAlert = () => {
    this.props.change(false);
  };

  componentWillMount() {
    clearTimeout(id);
  }

  render() {
    id = setTimeout(() => {
      this.disableAlert();
    }, 1700);

    return <h4>Contact alredy exsist!</h4>;
  }
}

export default Alert;
