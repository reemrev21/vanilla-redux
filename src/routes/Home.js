import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({toDos, addToDo}) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
   
  return (
    <>
      <h1> To do!! </h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(
          toDo =>
            <ToDo {...toDo} key={toDo.id} />
        )}
      </ul>
    </>
  );
}

// store와 connect
// getCurrentState
// redux state로 부터 component에 prop으로 전달
// getStore랑 동일한 역할?!
function mapStateToProp(state) {
  return { toDos: state };
}

// props로 보낼 수 있다.
function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
}

// 이 순서 안지켜주면 에러남 ㅋㅋ
export default connect(mapStateToProp, mapDispatchToProps)(Home);

// 둘 중하나만 사용할 경우 이렇게 표현
// export default connect(null, mapDispatchToProps)(Home);

 