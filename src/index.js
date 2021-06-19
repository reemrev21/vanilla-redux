const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
// 딱 한번만 작동한다. 
number.innerText = count;

// handleAdd, handleMinus는 값을 업데이트 하는 작업은 하지 않기 때문에
// 값을 업데이트 할 수 있는 함수를 만들어준다. 
const updateText = () => {
  number.innerText = count;
 }

const handleAdd = () => {
  count = count + 1;
  updateText();
 };

const handleMinus = () => {
  count = count - 1;
  updateText();
 };


add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
