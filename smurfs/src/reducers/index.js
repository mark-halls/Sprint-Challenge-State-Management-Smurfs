import {
  FETCH_SMURFS_LOADING,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILED
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_LOADING: {
      return { ...state, isFetching: true, error: null };
    }

    case FETCH_SMURFS_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: null
      };
    }

    case FETCH_SMURFS_FAILED: {
      return { ...state, smurfs: [], isFetching: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
