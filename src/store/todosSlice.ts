import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types/Todo";
import { IState } from "../types/State";

const initialState: IState = { todos: [] };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: ITodo = {
        id: state.todos.length + 1,
        title: action.payload,
        done: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    checkTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, checkTodo } = todoSlice.actions;

export default todoSlice.reducer;
