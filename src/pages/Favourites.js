import React from "react";
import { useContext } from "react";
import FavoriteContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favoritesCtx = useContext(FavoriteContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No Favorites Available</p>;
  } else {
    content = <MeetupList items={favoritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
