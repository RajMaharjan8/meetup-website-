import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoriteContext from "../../store/favourite-context";

function MainNavigation() {
  const favoriteCtx = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Meetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorite
              <span className={classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
