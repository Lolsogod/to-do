import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState, User } from "./types";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: User, thunkAPI) => {
    if (payload.username != "admin" || payload.password != "admin") {
      return thunkAPI.rejectWithValue("Неверное имя пользователя или пароль");
    }
    return payload;
  }
);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(login.rejected, (_, action) => {
      throw new Error(action.payload as string);
    });
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
