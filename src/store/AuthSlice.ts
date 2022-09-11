import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Session } from '@supabase/supabase-js';

export interface AuthSliceState {
	session: Session | null;
}

const initialState: AuthSliceState = {
	session: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setSession: (state, action: PayloadAction<Session | null>) => {
			state.session = action.payload;
		},
	},
});

export const { setSession } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
