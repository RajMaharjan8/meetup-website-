import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((elem) => (
        <MeetupItem
          key={elem.id}
          id={elem.id}
          image={elem.image}
          title={elem.title}
          address={elem.address}
          description={elem.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
