const TYPES = {
  INITIAL_TYPE: 'INITIAL_TYPE'
};

const initialState = {
  initialField: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.INITIAL_TYPE:
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
