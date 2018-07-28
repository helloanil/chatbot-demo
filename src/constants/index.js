export const chatModes = {
  BOT_SUPPORT: 'BOT_SUPPORT',
  LIVE_SUPPORT: 'LIVE_SUPPORT'
};

export const messageFroms = {
  BOT: 'BOT',
  USER: 'USER'
};

export const liveSupportChat = {
  0: {
    messageId: 0,
    messageText: 'What is your name?',
    expectedResponses: [],
    nextMessageId: 1
  },
  1: {
    messageId: 1,
    messageText: 'What is your email?',
    expectedResponses: [],
    nextMessageId: 2
  },
  2: {
    messageId: 2,
    messageText: 'What is your age?',
    expectedResponses: [],
    nextMessageId: 3
  },
  3: {
    messageId: 3,
    messageText: 'Support will contact you!',
    expectedResponses: [],
    nextMessageId: -1
  }
};

export const botSupportChat = {
  4: {
    messageId: 4,
    messageText: 'What is the problem?',
    expectedResponses: [
      {
        responseText: "Internet doesn't work",
        nextMessageId: 5
      },
      {
        responseText: "Phone doesn't work",
        nextMessageId: 6
      }
    ]
  },
  5: {
    messageId: 5,
    messageText: 'Have you restarted the router?',
    expectedResponses: [
      {
        responseText: 'No',
        nextMessageId: 7
      },
      {
        responseText: 'Yes',
        nextMessageId: 8
      }
    ]
  },
  6: {
    messageId: 6,
    messageText: 'Try again later!',
    expectedResponses: [],
    nextMessageId: -1
  },
  7: {
    messageId: 7,
    messageText: 'Restart router!',
    expectedResponses: [],
    nextMessageId: -1
  },
  8: {
    messageId: 8,
    messageText: 'We are investigating!',
    expectedResponses: [],
    nextMessageId: -1
  }
};

export const INITIAL_LIVE_ID = 0;
export const INITIAL_BOT_ID = 4;
