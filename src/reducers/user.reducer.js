const initialState = {data: null};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_USER':
      return {...state, data: action.payload}
    default:
      return state;
  }
};

export default messageReducer;
