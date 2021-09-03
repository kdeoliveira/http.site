import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store  = createStore(reducer, applyMiddleware(thunk));

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;