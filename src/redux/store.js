import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  signedIn: false,
  country: '',
  role: '',
  image: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setUserDetails } = userSlice.actions;

const store = configureStore({
  reducer: userSlice.reducer,
});

export default store;
