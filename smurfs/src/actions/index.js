import axios from "axios";

export const FETCH_SMURFS_LOADING = `FETCH_SMURFS_LOADING`;
export const FETCH_SMURFS_SUCCESS = `FETCH_SMURFS_SUCCESS`;
export const FETCH_SMURFS_FAILED = `FETCH_SMURFS_FAILED`;

export const smurfsLoading = () => ({ type: FETCH_SMURFS_LOADING });

export const smurfsLoadSuccess = payload => ({
  type: FETCH_SMURFS_SUCCESS,
  payload
});

export const smurfsLoadFailed = payload => ({
  type: FETCH_SMURFS_FAILED,
  payload
});

export const fetchSmurfs = () => dispatch => {
  dispatch(smurfsLoading());

  return axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => dispatch(smurfsLoadSuccess(res.data)))
    .catch(err => dispatch(smurfsLoadFailed(err.data)));
};
