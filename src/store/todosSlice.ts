import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/State";
import { URL } from "../constants/api";

const initialState: IState = { todos: [] };

export const getAllTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(`${URL}/todos`);
  const todos = await response.json();
  return todos;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNew",
  async (todoTile: string) => {
    const response = await fetch(`${URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todoTile }),
    });
    const newTodo = await response.json();
    return newTodo;
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/removeOne',
  async (todoId: number) => {
    const response = await fetch(`${URL}/todos/${todoId}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    })
    const removedId = await response.json();
    return removedId;
  }
);

export const checkTodo = createAsyncThunk(
  'todo/checkTodo',
  async (todoId: number) => {
    const response = await fetch(`${URL}/todos/${todoId}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
    });
    const newTodo = await response.json();
    return newTodo;
  }
)

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.fulfilled, (state, { payload }) => {
      state.todos = payload;
    });

    builder.addCase(addNewTodo.fulfilled, (state, {payload}) => {
      state.todos.push(payload);
    });

    builder.addCase(deleteTodo.fulfilled, (state, {payload}) => {
      const newTodoList = state.todos.filter(todo => todo.id !== payload);
      state.todos = newTodoList;
    });

    builder.addCase(checkTodo.fulfilled, (state, {payload}) => {
      const newTodoList = state.todos.map(todo => todo.id === payload.id ? payload : todo);
      state.todos = newTodoList;
    });
  },
});


export default todoSlice.reducer;
