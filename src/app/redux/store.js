const { configureStore } = require("@reduxjs/toolkit");
import userreducer from './slice'
import todoreducer from './todoslice';
// slice ke ander action and reducer hote hai smjhe daya 
export const store = configureStore({
    reducer:{
        usersdata:userreducer,
        todosdata: todoreducer
    }

})