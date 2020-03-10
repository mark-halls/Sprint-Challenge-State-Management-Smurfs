import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSmurfs } from "../../actions";

import SmurfCard from "./SmurfCard";

const Smurfs = () => {
  const dispatch = useDispatch();
  const smurfs = useSelector(state => state.smurfs);

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, [dispatch]);

  return (
    <div>
      {smurfs && smurfs.length > 0 ? (
        smurfs.map(smurf => <SmurfCard key={smurf.id} {...smurf} />)
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Smurfs;
