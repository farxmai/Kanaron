import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "store/store";
import { User } from "types/User";

interface InitialStateType {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  error?: null | any;
}

const initialState: InitialStateType = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onLoading(state) {
      state.isLoading = true;
    },
    loginSuccess(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.isLoading = false;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.isLoading = false;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    onError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const getUserAction = (id: string) => (dispatch: AppDispatch) => {
  // dispatch(slice.actions.onLoading())
  // requests.user
  //   .getUser(id)
  //   .then((res) => {
  //     dispatch(slice.actions.setUser(res.data))
  //   })
  //   .catch((err) => {
  //     onAxiosError('USER GET ERROR')(err)
  //     dispatch(slice.actions.onError(err?.response?.data))
  //   })
};

export default slice.reducer;
