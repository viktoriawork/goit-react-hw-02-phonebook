import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Styles from "./Filter.module.css";
class Filter extends Component {
  filterId = uuidv4();
  render() {
    return (
      <>
        <input
          className={Styles.contactInput}
          value={this.props.filter}
          onChange={this.props.onHandlerFilter}
          type="text"
          name="filter"
          id={this.filterId}
        ></input>
      </>
    );
  }
}

export default Filter;
