import { createStore } from "redux";
// 1. data를 넣을 수 있는 장소를 생성한다. 

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// createStore 사용하려면 필요하다. 
// data를 바꾸고 수정할 수 있다. 
// Reducer 함수만 데이터를 수정하고 바꿀 수 있다.
// action은 함수를 부를 때 쓰는 두번째 인자이자 인수이다. 
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "Minus") {
    return count - 1;
  } else {
    return 0;
  }
};
// 스토어 생성 -> 데이터 저장
const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "Minus" });

console.log(countStore.getState());