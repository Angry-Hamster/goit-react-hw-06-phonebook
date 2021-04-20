import React, { Component } from "react";
import css from "./animation.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Logo extends Component {
  state = {
    isLoad: false,
  };

  componentWillMount(){
    setTimeout(()=>{this.setState({isLoad: true})}, 150)
  }

  render() {
    return (
      <TransitionGroup className={css.main}>
        {this.state.isLoad && (
          <CSSTransition timeout={500} classNames={css}>
            <h1>Phonebook</h1>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  }
}

export default Logo;
