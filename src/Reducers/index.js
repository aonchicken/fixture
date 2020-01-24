import {combineReducers } from "redux";
import {reducer as reduxForm} from "redux-form";

import AccountReducer from "./AccountReducer";

const rootReducer = combineReducers({
    accounts: AccountReducer,
    form: reduxForm
})

export default rootReducer;
