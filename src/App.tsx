import React, { useState } from "react";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/todosSlice";
import { TodoList } from "./components/TodoList";
import {IStore} from './types/State';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: IStore) => state.todos);
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  return (
    <div className="App">
      <Header />
      <TodoForm
        onSubmit={submitHandler}
        onChange={changeHandler}
        inputValue={inputValue}
        placeholder=""
      />
      <TodoList todos={todos.todos}/>
    </div>
  );
}

export default App;
