import React from 'react';
import PropTypes from 'prop-types';

import TwitchIconSVG from './TwitchIconSVG';
import GoodgameIconSVG from './GoodgameIconSVG';
import YoutubeIconSVG from './YoutubeIconSVG';

// Использование иконок сервисов
const UserIcon = ({icon}) => {
  switch (icon) {
    case 'twitch':
      return <TwitchIconSVG/>;
    case 'youtube':
      return <YoutubeIconSVG/>;
    case 'goodgame':
      return <GoodgameIconSVG/>;
    default:
      return false;
  }
};

UserIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default UserIcon;
