import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }),
});

class RandomError extends React.Component {

  renderRandomError() {
    const {classes} = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={2}>
          <Typography variant="headline">
            Random API: {this.props.error}
          </Typography>
        </Paper>
      </div>
    );
  }

  render() {
    return this.props.error !== '' ? this.renderRandomError() : null;
  }
}

RandomError.propTypes = {
  error: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(RandomError);
