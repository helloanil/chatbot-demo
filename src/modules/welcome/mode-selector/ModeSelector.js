import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { chatModes } from '../../../constants';

import ExpansionPanelWithButton from './ExpansionPanelWithButton';

const styles = {
  root: {
    padding: '0 10px',
    marginBottom: '30px'
  }
};

const ModeSelector = props => (
  <div className={props.classes.root}>
    <ExpansionPanelWithButton
      summary="Get Instant Support"
      details="Let our advanced chatbot to guide you on your problem."
      mode={chatModes.BOT_SUPPORT}
    />
    <ExpansionPanelWithButton
      summary="Request Live Support"
      details="Leave your contact details for our live support assistants to reach out to you."
      mode={chatModes.LIVE_SUPPORT}
    />
  </div>
);

export default withStyles(styles)(ModeSelector);
