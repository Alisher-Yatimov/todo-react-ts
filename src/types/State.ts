import {ITodo} from './Todo';
export interface IState {
    todos: ITodo[]
}

export interface IStore {
    todos: {
      todos: ITodo[]
    }
  }