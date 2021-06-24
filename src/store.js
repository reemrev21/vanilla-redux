import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// mutate 하기 훨씬 좋음
// 1. 새로운 것을 return 할 수 있다.
// redux toolkit은 immer 기반? 라서 mutate 가능.. 
// 2. *** state를 mutate 할 수 있다. ***
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // return 할 때는 새로운 state 여야함
    // 이 경우에 push()는 아무것도 리턴하지 않음 state mutate만함
    // 그래서 이렇게 작성
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    // filter는 리턴한다. 
    state.filter(toDo => toDo.id !== action.payload)
})

// redux develop tool 이용 가능
// state에 패스워드에 저장하면 안됨ㅋㅋ 다 보인다!
const store = configureStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
