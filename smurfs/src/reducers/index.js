import { LOADING, LOAD_SUCCESS, LOAD_FAILED } from "../actions";

const initialState = {
  smurfs: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: true, error: null };
    }

    case LOAD_SUCCESS: {
      return {
        ...state,
        smurfs: [...action.payload],
        loading: false,
        error: null
      };
    }

    case LOAD_FAILED: {
      return {
        ...state,
        smurfs: [],
        loading: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
