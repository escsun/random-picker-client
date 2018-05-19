import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1
  }
};


const AppBarMenu = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Random Picker App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

AppBarMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarMenu);
