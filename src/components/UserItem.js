import React from 'react';
import PropTypes from 'prop-types';
import {ListItemText, ListItem, ListItemIcon} from 'material-ui/List';
import UserIcon from './UserIcon';
import userNormalize from '../utils/userNormalize';

const UserItem = ({user}) => {
  // Разделяем сообщение на 3 части: icon, username, text
  const data = userNormalize(user);
  // Делаем деструктивное присваниевание данных
  const [icon, username, text] = [data['icon'], data['username'], data['text']];
  return (
    <ListItem button>
      <ListItemIcon>
        <UserIcon icon={icon}/>
      </ListItemIcon>
      <ListItemText primary={`${username}: ${text}`}/>
    </ListItem>
  );
};

UserItem.propTypes = {
  user: PropTypes.string.isRequired
};

export default UserItem;
