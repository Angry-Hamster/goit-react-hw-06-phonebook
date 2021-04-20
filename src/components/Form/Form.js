import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { connect } from "react-redux";
import * as contactActions from "../../redux/contact/actions";

import animation from "../Alert/alert.module.css";
import css from "./form.module.css";
import Alert from "../Alert/Alert";

class Form extends Component {
  // ToDo contact
  state = {
    name: "",
    number: "",

    alert: false,
  };

  // ToDo methods
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = { name, number, id: uuidv4() };

    if (
      this.props.contact.filter((w) => w.name.toLowerCase() == name.toLowerCase())
        .length == 0
    ) {
      this.props.addContact(contact);
    } else {
      this.changeAlert(true);
    }

    this.claerForm();
  };

  changeAlert = (bool) => {
    this.setState({ alert: bool });
  };

  claerForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  // ToDo DOM tree
  render() {
    return (
      <>
        <TransitionGroup className={animation.main}>
          {this.state.alert && (
            <CSSTransition timeout={250} classNames={animation}>
              <Alert change={this.changeAlert} />
            </CSSTransition>
          )}
        </TransitionGroup>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            required
            autoComplete="off"
          />

          <label htmlFor="number">Phone</label>
          <input
            id="number"
            name="number"
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            required
            autoComplete="off"
          />

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

// ToDo props defoult & props type
Form.defaultProps = {
  users: [{ id: "id-0", name: "your name", number: "your number" }],
};

Form.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (value) => dispatch(contactActions.addContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
