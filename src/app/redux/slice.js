const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users:[]
}
const Slice = createSlice({
    name:"adduserslice",
    initialState,
    reducers:{
        adduser:(state,action)=>{
            console.log(action);
            const data = {
                id:nanoid(),
                name:action.payload,

            }
            state.users.push(data);
        }
    }
})
export const {adduser}=Slice.actions;
export default Slice.reducer;