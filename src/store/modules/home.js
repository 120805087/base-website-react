import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getHomeHighScoreData } from "../../services";

// 创建异步 Action
export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  (payload, { dispatch }) => {
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
  }
);

// 创建切片
const homeSlice = createSlice({
  name: "home",
  initialState: {
    highScoreInfo: {},
  },
  reducers: {
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
});

export const { changeHighScoreInfoAction } = homeSlice.actions;

export default homeSlice.reducer;
