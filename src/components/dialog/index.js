import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MuiDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

class Dialog extends React.Component {
  render() {
    const { open, onClose } = this.props;

    return (
      <MuiDialog open={open}>
        <DialogTitle>Super Secret Password</DialogTitle>
        <DialogContent>
          <DialogContentText>1-2-3-4-5</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onClose}>
            OK
          </Button>
        </DialogActions>
      </MuiDialog>
    );
  }
}

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Dialog;
