import { createStore, combineReducers, applyMiddleware } from "redux";
import {useSelector, TypedUseSelectorHook} from "react-redux";
import thunk from 'redux-thunk';
import {logger} from "../logger";
import summaryReducer from "../reducers";

const rootReducer = combineReducers({
    summary: summaryReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
);

export type RootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.__store__ = store;

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector
