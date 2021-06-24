import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
      </Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

function mapStateToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id))
  }
}
export default connect(null, mapStateToProps)(ToDo);