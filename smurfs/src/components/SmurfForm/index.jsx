import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postSmurf } from "../../actions";

const SmurfForm = () => {
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    age: "",
    height: "",
    id: smurfs.length
  };

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = () => {
    dispatch(postSmurf(formState));
    setFormState(initialState);
  };

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formState.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        name="age"
        value={formState.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="0cm"
        name="height"
        value={formState.height}
        onChange={handleChange}
      />
      <button type="button" onClick={() => handleSubmit()}>
        Submit
      </button>
    </form>
  );
};

export default SmurfForm;
