import React, { Component } from "react";
import css from "./filter.module.css";

import { connect } from "react-redux";
import * as filterActions from '../../redux/filter/actions';

class Filter extends Component {
  // ToDo methods
  handleChange = (e) => {
    this.props.setFilter(e.target.value)
  };

  // ToDo DOM tree
  render() {
    return (
      <div className={css.filter}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          name="filter"
          id="filter"
          onChange={this.handleChange}
          autoComplete="off"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  setFilter: value => dispatch(filterActions.setFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
