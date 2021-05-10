import React, { useCallback, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos, addNewTodo } from "./store/todosSlice";
import { TodoList } from "./components/TodoList";
import { IStore } from './types/State';
import { ThemeProvider } from "styled-components";
import { theme } from './constants/theme';


function App() {
  const dispatch = useDispatch();
  const getTodos = useCallback(async (): Promise<void> => { 
    dispatch(getAllTodos()); 
  }, [dispatch])

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const todos = useSelector((state: IStore) => state.todos);
  const checked = useSelector((state: IStore) => state.theme);
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addNewTodo(inputValue));
    setInputValue('');
  };

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  return (
    <ThemeProvider theme={checked ? theme.dark : theme.light}>
      <Header />
      <TodoForm
        onSubmit={submitHandler}
        onChange={changeHandler}
        inputValue={inputValue}
        placeholder=""
      />
      <TodoList todos={todos.todos}/>
    </ThemeProvider>
  );
}

export default App;
