import React from "react";
import { useDispatch } from "react-redux";

import { deleteSmurf } from "../../../actions";

const SmurfCard = ({ name, age, height, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
      <button type="button" onClick={() => dispatch(deleteSmurf(id))}>
        Delete
      </button>
    </div>
  );
};

export default SmurfCard;
