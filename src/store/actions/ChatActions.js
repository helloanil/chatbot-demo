import { TYPES } from '../reducers/ChatReducer';

export const setAvatar = avatarName => dispatch => {
  dispatch({
    type: TYPES.SET_AVATAR,
    payload: avatarName
  });
};

export const setMode = mode => dispatch => {
  dispatch({
    type: TYPES.SET_MODE,
    payload: mode
  });
};

export const sendMessage = message => dispatch => {
  dispatch({
    type: TYPES.SEND_MESSAGE,
    payload: message
  });
};
