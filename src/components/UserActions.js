import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {userReset} from '../core/actions/users';
import {runSocketChannel, stopSocketChannel} from '../core/actions/socket';
import {getRandomNumber} from '../core/actions/random';
import {getStatus} from '../core/selectors/socket';
import {getUsers} from '../core/selectors/users';
import {winnerReset} from '../core/actions/winner';


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    margin: theme.spacing.unit,
  },
});


class UserActions extends React.Component {

  reset = () => {
    // Сбросить список участников
    this.props.actions.userReset();
    // Сбросить ключевое слово и победителя
    this.props.actions.winnerReset();
  };

  run = () => {
    // Запустить websocket
    this.props.actions.runSocketChannel();
  };

  stop = () => {
    // Остановить websocket
    this.props.actions.stopSocketChannel();
  };

  getWinner = () => {
    const min = 1;
    const max = this.props.users.length;
    // Получаем случайное значение в пределах от 0 до количества участников
    this.props.actions.getRandomNumber(min, max);
    // Останавливаем сбор
    this.props.actions.stopSocketChannel();
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Button color="default" className={classes.button} variant="raised" onClick={this.reset}>Сбросить</Button>
        <Button color="primary" className={classes.button} variant="raised" onClick={this.getWinner}>Разыграть</Button>
        {
          this.props.status
            ? <Button color="secondary" className={classes.button} variant="raised"
                      onClick={this.stop}>Остановить</Button>
            : <Button color="secondary" className={classes.button} variant="raised"
                      onClick={this.run}>Начать сбор</Button>
        }
      </div>
    );
  }
}


UserActions.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    userReset: PropTypes.func,
    runSocketChannel: PropTypes.func,
    stopSocketChannel: PropTypes.func,
    getRandomNumber: PropTypes.func,
    winnerReset: PropTypes.func
  }),
  status: PropTypes.bool
};

const mapStateToProps = (state) => ({
  status: getStatus(state),
  users: getUsers(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    userReset,
    runSocketChannel,
    stopSocketChannel,
    getRandomNumber,
    winnerReset,
  }, dispatch)
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(UserActions);
