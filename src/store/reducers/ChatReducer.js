export const TYPES = {
  SET_AVATAR: 'SET_AVATAR',
  SET_MODE: 'SET_MODE'
};

const initalState = {
  avatar: null,
  mode: null
};

export default (state = initalState, action) => {
  switch (action.type) {
    case TYPES.SET_AVATAR:
      return {
        ...state,
        avatar: action.payload
      };
    case TYPES.SET_MODE:
      return {
        ...state,
        mode: action.payload
      };
    default:
      return state;
  }
};
