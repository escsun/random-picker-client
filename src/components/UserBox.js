import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import UserList from './UserList';
import UserTarget from './UserTarget';
import UserActions from './UserActions';
import UserWinner from './UserWinner';
import RandomError from './RandomError';
import {winnerSetTarget} from '../core/actions/winner';
import * as UserSelector from '../core/selectors/users';
import * as RandomSelector from "../core/selectors/random";
import * as WinnerSelector from "../core/selectors/winner";


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  }),
  container: {
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});


class UserBox extends Component {

  handleChange = name => event => {
    // Устанавливаем ключевое слово
    this.props.actions.winnerSetTarget(event.target.value);
  };

  render() {
    const {classes, users, winner, error} = this.props;
    return (
      <div className={classes.container}>
        <UserTarget onHandleChange={this.handleChange('target')}/>
        <RandomError error={error}/>
        <UserWinner winner={winner}/>
        <Paper className={classes.root} elevation={2}>
          <Typography variant="headline">
            Количество участников: {users.length}
          </Typography>
          <UserList users={users}/>
          <UserActions/>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: UserSelector.getUsers(state),
  winner: WinnerSelector.getWinner(state),
  error: RandomSelector.getRandomError(state)
});

const mapPropsToDispatch = dispatch => ({
  actions: bindActionCreators({winnerSetTarget}, dispatch)
});

UserBox.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    winnerSetTarget: PropTypes.func
  })
};

export default compose(connect(mapStateToProps, mapPropsToDispatch), withStyles(styles))(UserBox);
