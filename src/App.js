import React, { Component } from "react";

import { connect } from "react-redux";
import * as contactActions from "./redux/contact/actions";

import Contacts from "./components/Contacts/Contacts";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import Logo from "./components/Logo/Logo";

class App extends Component {
  componentDidMount() {
    // ? load JSON to localStorege
    window.addEventListener("beforeunload", () => {
      localStorage.clear();
      this.props.contact.length &&
        localStorage.setItem("contacts", JSON.stringify(this.props.contact));
    });

    // ? unload JSON of localStorege
    window.addEventListener("load", () => {
      if (localStorage.getItem("contacts") != null) {
        this.props.addContact(JSON.parse(localStorage.getItem("contacts")));
      }
    });
  }
  // ToDo DOM tree
  render() {
    return (
      <>
        <Logo />
        <Form />

        <Filter />
        <Contacts />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contact,
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (value) => dispatch(contactActions.postContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
