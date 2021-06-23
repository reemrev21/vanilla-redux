import { createStore } from "redux";

const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
  return {
    type: ADD,
    text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE,
    id
  }
}

// Mutate State 절대 하지 않기 -> mutate 하는 것이 아닌 새로운 객체를 리턴해야함 
// state는 action만 변경할 수 있다. 
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newToDoObj = { text: action.text, id: Date.now() }
      return [newToDoObj, ...state];
    case DELETE:
      const cleaned = state.filter(toDo => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);
