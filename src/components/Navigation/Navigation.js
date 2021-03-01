import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={s.Navigation}>
        <li>
          <NavLink
            exact
            to={routes.home}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
