import React, { Component } from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { connect } from "react-redux";
import * as contactActions from "../../redux/contact/actions";

import css from "./contact.module.css";
import animation from "./animation.module.css";

import close from "../../img/close.png";

class Contact extends Component {
  // ToDo function
  handlefilter = () => {
    const { contact, filter } = this.props;

    if (filter == "") {
      return contact;
    } else {
      return contact.filter((w) =>
        w.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
  };

  handleDelete = (e) => {
    this.props.deleteContact(e.target.parentNode.id);
  };

  // ToDo DOM tree
  render() {
    return (
      <TransitionGroup className={css.contactList}>
        {this.handlefilter(this.props.users).map((item) => {
          const { id, name, number } = item;
          return (
            <CSSTransition key={id} timeout={250} classNames={animation}>
              <li id={id}>
                <span>
                  {name}: {number}
                </span>

                <button id={id} onClick={this.handleDelete}>
                  {" "}
                  <img src={close} alt="Delete"></img>{" "}
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}

// ToDo props defoult & props type
Contact.defaultProps = {
  contact: [{ id: "id-0", name: "your name", number: "your number" }],
  filter: "",
};

Contact.propTypes = {
  contact: PropTypes.array,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
  contact: state.contact,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: value => dispatch(contactActions.deleteContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

