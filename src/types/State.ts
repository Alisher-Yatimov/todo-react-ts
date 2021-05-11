import { ITheme } from './Theme';
import {ITodo} from './Todo';
export interface ITodoState {
    todos: ITodo[]
}

export interface IStore {
    todos: {
      todos: ITodo[]
    },
    theme: boolean
}

export interface IState {
  user: {
    token: {
      token: string,
    },
    error: string
    loading: boolean
  },
  todos: ITodoState,
  theme: ITheme
}