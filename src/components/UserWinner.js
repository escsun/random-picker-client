import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withStyles} from 'material-ui/styles';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import {getUsers} from '../core/selectors/users';
import userNormalize from '../utils/userNormalize';
import UserIcon from './UserIcon';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }),
});

class UserWinner extends React.Component {
  // Получаем победителя из хранилища users
  // winner - число
  getUserWinnerNormalize = () => {
    // уменьшаем на 1 так как индекс массива начинается с 0
    return userNormalize(this.props.users[this.props.winner - 1]);
  };

  renderWinner() {
    const {classes} = this.props;
    const data = this.getUserWinnerNormalize();
    return (
      <div>
        <Paper className={classes.root} elevation={2}>
          <div>
            <ListItem>
              <ListItemIcon>
                <UserIcon icon={data['icon']}/>
              </ListItemIcon>
              <ListItemText primary="Победитель" secondary={data['username']} />
            </ListItem>
          </div>
        </Paper>
      </div>
    );
  }

  render() {
    return this.props.winner !== null ? this.renderWinner() : null;
  }
}

UserWinner.propTypes = {
  winner: PropTypes.number,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  users: getUsers(state)
});

export default compose(connect(mapStateToProps), withStyles(styles))(UserWinner);
