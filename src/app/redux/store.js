const { configureStore } = require("@reduxjs/toolkit");
import reducer from './slice'
// slice ke ander action and reducer hote hai smjhe daya 
export const store = configureStore({
    reducer:{reducer}

})