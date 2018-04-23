import React from 'react';

import AppBarMenu from './AppBarMenu';
import UserBox from './UserBox';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppBarMenu/>
        <UserBox/>
      </div>
    );
  }
}

export default App;
