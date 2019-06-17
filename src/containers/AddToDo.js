import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';

let AddToDo = ({ dispatch }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addToDo(input.value));
        input.value = '';
      }}
    >
      <input
        type="text"
        placeholder="Enter an item"
        ref={node => {
          input = node;
        }}
      />
      <button type="submit">Add To-Do</button>
    </form>
  );
};
AddToDo = connect()(AddToDo);

export default AddToDo;
