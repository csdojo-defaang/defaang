import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { authSliceReducer } from './AuthSlice';

export const store = configureStore({
	reducer: {
		auth: authSliceReducer,
	},
});

export type StoreStateType = ReturnType<typeof store.getState>;
export type StoreDispatchType = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<StoreDispatchType>();
export const useTypedSelector: TypedUseSelectorHook<StoreStateType> = useSelector;
