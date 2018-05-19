import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
});

class UserTarget extends React.Component {
  render() {
    const {classes, onHandleChange} = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="target"
          label="Ключевое слово"
          className={classes.textField}
          onChange={onHandleChange}
          margin="normal"
        />
      </form>
    );
  }
}

UserTarget.propTypes = {
  classes: PropTypes.object.isRequired,
  onHandleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(UserTarget);
