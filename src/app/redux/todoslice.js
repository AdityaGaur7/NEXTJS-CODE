const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    todos: []
}

const Slice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addtodos: (state,action) => {
            //  console.log(action);
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(data)
        }

    }

})
export const {addtodos}=Slice.actions;
export default Slice.reducer