import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import {withStyles} from 'material-ui/styles';
import UserItem from './UserItem';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    height: '54vh',
    width: '100%',
    overflow: 'auto',
  },
});

class UserList extends React.Component {
  render() {
    const {classes, users} = this.props;
    return (
      <div className={classes.root}>
        <List>
          {users.map((user, index) => <UserItem user={user} key={index}/>)}
        </List>
      </div>
    );
  }
}

UserList.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

export default withStyles(styles)(UserList);
