const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users:[]
}
const Slice = createSlice({
    name:"adduserslice",
    initialState,
    reducers:{
        adduser:(state,action)=>{
            // console.log(action);
            const data = {
                id:nanoid(),
                name:action.payload,

            }
            state.users.push(data);
        },
        removeuser:(state,action)=>{
            // const index = state.users.findIndex((user)=>user.id === action.payload);
            // state.users.splice(index,1);
            
            const data = state.users.filter((item)=>{
                return item.id !== action.payload;
            })
            state.users = data;

           

        
        
        }

    }
})
export const {adduser,removeuser}=Slice.actions;
export default Slice.reducer;