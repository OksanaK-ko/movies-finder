import React, { Component } from "react";
import s from "./Searchbox.module.css";

export default class Searchbox extends Component {
  state = { value: "" };

  handleChange = (e) => {
    const { value } = e.currentTarget;
    this.setState({ value: value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={s.SearchForm_input}
            type="text"
            placeholder="Search movies"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>
        </form>
      </div>
    );
  }
}
