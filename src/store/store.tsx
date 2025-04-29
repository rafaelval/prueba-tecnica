import { GlobalState } from "./global-state.interface";
import { createStore, applyMiddleware } from "redux";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import reducer from "./reducer";
import { thunk } from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk)); 
export const useGlobalSelector: TypedUseSelectorHook<GlobalState> = useSelector;
export type GlobalDispatch = typeof store.dispatch;
