import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITodoState } from "../types/State";
import { URL } from "../constants/api";

const initialState: ITodoState = { todos: [] };

interface IBody {
  [key: string]: any;
  token: string;
  title?: string;
  todoId?: number
}

export const getAllTodos = createAsyncThunk("todos/fetchTodos", async (token: string) => {
  const response = await fetch(`${URL}/todos`, {headers: {
    "Authorization": `Bearer ${token}`
  }});
  const todos = await response.json();
  return todos;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNew",
  async (todoData: IBody) => {
    const response = await fetch(`${URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${todoData.token}`
      },
      body: JSON.stringify({ title: todoData.title }),
    });
    const newTodo = await response.json();
    return newTodo;
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/removeOne',
  async (todoData: IBody) => {
    const response = await fetch(`${URL}/todos/${todoData.todoId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${todoData.token}`
      },
    })
    const removedId = await response.json();
    return removedId;
  }
);

export const checkTodo = createAsyncThunk(
  'todo/checkTodo',
  async (todoData: IBody) => {
    const response = await fetch(`${URL}/todos/${todoData.todoId}`, {
      method: 'PATCH',
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${todoData.token}`
    },
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
