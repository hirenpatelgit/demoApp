/**
 * Author         : Hiren Patel
 * Modification   : Initial Version
 * Date           : 29th Sept 2021
 * Email          : hirenpatel.1088@gmail.com
 * purpose        : Contain list of registered user list
 **/

import { createSlice } from "@reduxjs/toolkit";

export const UserAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    listUser: [],
  },
  reducers: {
    addUserList: (state, action) => {
      state.listUser = [...state.listUser, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserList } = UserAuthSlice.actions;

export default UserAuthSlice.reducer;
