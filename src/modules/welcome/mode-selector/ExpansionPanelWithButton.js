import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { setMode } from '../../../store/actions/ChatActions';
import { chatModes } from '../../../constants';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';

const styles = theme => ({
  panelButtonWrapper: {
    display: 'flex',
    margin: '10px 0'
  },
  panel: {
    width: '85%'
  },
  button: {
    margin: 'auto'
  },
  arrow: {
    color: '#FFFFFF',
    fontSize: 24
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class ExpansionPanelWithButton extends Component {
  onButtonClick = () => this.props.setMode(this.props.mode);

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.panelButtonWrapper}>
        <ExpansionPanel className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              {this.props.summary}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{this.props.details}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Button
          className={classes.button}
          onClick={this.onButtonClick}
          variant="fab"
          color="primary"
          mini
        >
          <ArrowForward className={classes.arrow} />
        </Button>
      </div>
    );
  }
}

ExpansionPanelWithButton.defaultProps = {
  summary: 'Default Title',
  details: 'Default Explanation',
  mode: chatModes.BOT_SUPPORT
};

ExpansionPanelWithButton.propTypes = {
  summary: PropTypes.string,
  details: PropTypes.string,
  mode: PropTypes.string,
  setMode: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setMode
    },
    dispatch
  );

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(ExpansionPanelWithButton);
