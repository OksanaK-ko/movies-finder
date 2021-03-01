import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./SearchBar.module.css";

class SearchBar extends Component {
  state = {
    name: "",
  };

  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name.trim() === "") {
      toast.info("Введите что-нибудь в строку поиска");
      return;
    }

    this.props.onSubmit(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <header className={s.SearchBar}>
        <form onSubmit={this.handleSubmit}>
          <input
            className={s.SearchForm_input}
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </form>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>
      </header>
    );
  }
}

export default SearchBar;
