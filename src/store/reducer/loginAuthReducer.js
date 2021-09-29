/**
 * Author         : Hiren Patel
 * Modification   : Initial Version
 * Date           : 29th Sept 2021
 * Email          : hirenpatel.1088@gmail.com
 * purpose        : Contain Logged In User data and flag to check is loggen in or not
 **/
import { createSlice } from "@reduxjs/toolkit";

export const LoginAuthSlice = createSlice({
  name: "loginAuth",
  initialState: {
    isLogin: false,
    userInfo: {},
  },
  reducers: {
    updateLoginStatus: (state, action) => {
      state.isLogin = action.payload;
    },
    updateLoginInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateLoginStatus, updateLoginInfo } = LoginAuthSlice.actions;

export default LoginAuthSlice.reducer;
