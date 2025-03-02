import { createSlice } from "@reduxjs/toolkit";
const accountSlice = createSlice({
  name: "Account",
  initialState: {
    options: null,
    accounts: [],
    loading: false,
    error: "",
  },
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    getChartAccount(state, action) {
      state.accounts = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setOption(state, action) {
      state.options = action.payload;
    },
  },
});

export const { setLoading, setError, getChartAccount, setOption } =
  accountSlice.actions;
export default accountSlice.reducer;
