const { createSlice, nanoid ,current, createAsyncThunk} = require("@reduxjs/toolkit");

const initialState = {
    usersapidata:[],
    users:JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
}


export const fetchapiusers= createAsyncThunk("fetchapiusers",async()=>{

    console.log("action");
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data
    

})


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
            let userdata = JSON.stringify(current(state.users));
            localStorage.setItem("users",userdata);
           
        },
        removeuser:(state,action)=>{
            // const index = state.users.findIndex((user)=>user.id === action.payload);
            // state.users.splice(index,1);
            
            const data = state.users.filter((item)=>{
               
               
                return item.id !== action.payload;
            })

            state.users = data;
            let userdata = JSON.stringify(data);
            localStorage.setItem("users",userdata);
           

        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchapiusers.fulfilled,(state,action)=>{
            console.log("reducer",action);
            state.isloading = false,
            state.usersapidata=action.payload
        })
    }

})
export const {adduser,removeuser}=Slice.actions;
export default Slice.reducer;