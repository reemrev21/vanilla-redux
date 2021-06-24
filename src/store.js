import { configureStore, createSlice } from "@reduxjs/toolkit";

// reducer와 action 모두 제공
const toDos = createSlice({
  name: "toDoReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() })
    },
    remove: (state, action) => 
      state.filter(toDo => toDo.id !== action.payload)
  }
})

export const { add, remove } = toDos.actions;

// redux develop tool 이용 가능
// state에 패스워드에 저장하면 안됨ㅋㅋ 다 보인다!
export default configureStore({reducer : toDos.reducer});

