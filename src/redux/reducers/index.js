import titleReducer from "./titleReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    title: titleReducer
}) 

export default rootReducer;