export const TYPES = {
  SET_AVATAR: 'SET_AVATAR',
  SET_MODE: 'SET_MODE',
  SEND_MESSAGE: 'SEND_MESSAGE'
};

const initalState = {
  avatar: null,
  mode: null,
  lastMessage: {},
  lastMessageFrom: null,
  lastBotMessageId: null,
  chatLog: []
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
    case TYPES.SEND_MESSAGE: {
      const newChatLog = state.chatLog.slice();

      newChatLog.push(action.payload);

      return {
        ...state,
        lastMessage: action.payload,
        lastBotMessageId:
          action.payload.botMessageId !== undefined // To include 0
            ? action.payload.botMessageId
            : state.lastBotMessageId,
        chatLog: newChatLog
      };
    }
    default:
      return state;
  }
};
