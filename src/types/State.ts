import { ITodo } from './Todo';

export interface ITodoState {
    todos: ITodo[];
}

export interface IState {
    user: {
        token: {
            token: string;
        };
        error: string;
        loading: boolean;
    };
    todos: ITodoState;
    theme: boolean;
}
