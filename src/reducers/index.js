import { combineReducers } from 'redux';
import messageReducer from './message.reducer';
import userReducer from './user.reducer';
import cartReducer from './cart.reducer';

const allReducers = combineReducers({
  message: messageReducer,
  users: userReducer,
  cart: cartReducer
});

export default allReducers;
