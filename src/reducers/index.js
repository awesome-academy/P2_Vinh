import { combineReducers } from 'redux';
import messageReducer from './message.reducer';
import userReducer from './user.reducer';

const allReducers = combineReducers({
  message: messageReducer,
  users: userReducer
});

export default allReducers;
