import axios from "axios";

export const LOADING = `FETCH_SMURFS_LOADING`;
export const LOAD_SUCCESS = `FETCH_SMURFS_SUCCESS`;
export const LOAD_FAILED = `FETCH_SMURFS_FAILED`;
export const DELETE = "DELETE";

export const loading = () => ({ type: LOADING });

export const loadSuccess = payload => ({
  type: LOAD_SUCCESS,
  payload
});

export const loadFailed = payload => ({
  type: LOAD_FAILED,
  payload
});

export const fetchSmurfs = () => dispatch => {
  dispatch(loading());

  return axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => dispatch(loadSuccess(res.data)))
    .catch(err => dispatch(loadFailed(err.data)));
};

export const postSmurf = payload => dispatch => {
  dispatch(loading());

  //   payloadShape: {
  //     name: "Sleepy",
  //     age: 200,
  //     height: "5cm",
  //     id: 1
  //   }

  return axios
    .post(`http://localhost:3333/smurfs`, payload)
    .then(res => {
      console.log(res.data);
      dispatch(loadSuccess(res.data));
    })
    .catch(err => dispatch(loadFailed(err.data)));
};

export const deleteSmurf = id => dispatch => {
  dispatch(loading());

  return axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch(loadSuccess(res.data)))
    .catch(err => dispatch(loadFailed(err.data)));
};
