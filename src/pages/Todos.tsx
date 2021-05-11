import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../components/Container";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { addNewTodo, getAllTodos } from "../store/todosSlice";
import { IState } from "../types/State";

export const Todos = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: IState) => state.user.token.token);
  const getTodos = useCallback(async (): Promise<void> => {
    dispatch(getAllTodos(token));
  }, [dispatch, token]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const todos = useSelector((state: IState) => state.todos.todos);
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addNewTodo({ title: inputValue, token }));
    setInputValue("");
  };

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  return (
    <Container>
      <TodoForm
        onSubmit={submitHandler}
        onChange={changeHandler}
        inputValue={inputValue}
        placeholder="type todo"
      />
      <TodoList todos={todos} />
    </Container>
  );
};
