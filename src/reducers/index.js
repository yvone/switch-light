import { combineReducers } from "redux";

import switchReducer from "./switcher";

const rootReducer = combineReducers({
  switcher: switchReducer
});

export default rootReducer;
