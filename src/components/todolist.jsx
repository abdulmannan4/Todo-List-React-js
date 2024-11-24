import { useState } from "react";
import React from 'react';
import Display from './display';

const Todolist = () => {
  const [text, setText] = useState('');
  const [display, setDisplayText] = useState([]); // Initialize as an array, not a string

  const getInput = (e) => {
    setText(e.target.value); // Update text as user types
  };

  const submit = () => {
    if (text.trim() === '') return; // Prevent adding empty tasks
    const storeValues = [...display, text];
    setDisplayText(storeValues); 
    setText(''); // Clear the input field after adding
  };

  return (
    <>
      <div className="flex justify-center">
        <input
          value={text} // Bind value of input to text state
          onChange={getInput} // Listen for input changes
          className="p-[1.88vh] text-black"
          type="text"
          placeholder="Enter your todo task"
        />
        <button
          onClick={submit} // Update display state with the text on button click
          className="ml-3 border border-zinc-500 text-zinc-300 px-4 py-2 rounded hover:bg-green-200 hover:text-black"
        >
          Add
        </button>
      </div>

      <Display textvalue={display} setDisplayText={setDisplayText} />
    </>
  );
};

export default Todolist;
