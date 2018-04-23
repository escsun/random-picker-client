import {combineReducers} from 'redux';
import usersReducer from './users';
import socketReducer from "./socket";
import randomReducer from "./random";
import winnerReducer from "./winner";


export default combineReducers({
  users: usersReducer,
  socket: socketReducer,
  random: randomReducer,
  winner: winnerReducer
});
