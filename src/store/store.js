import { legacy_createStore as createStore } from "redux";
import reducer from "./task";

const store = createStore(reducer);

export default store;
