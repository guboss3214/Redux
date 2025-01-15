import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  signedIn: false,
  country: '',
  role: '',
  image: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DETAILS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export default store;
