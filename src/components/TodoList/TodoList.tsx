import { ITodo } from "../../types/Todo";
import { TodoCard } from "../TodoCard";

interface ITodoListProps {
  todos: ITodo[];
}

export const TodoList = (props: ITodoListProps) => {
  const { todos } = props;
  if(!todos.length) {
    return <h1>todolist is empty</h1>
  }
  return (
    <>
      {todos.map((todo) => (
        <TodoCard
          id={todo.id}
          title={todo.title}
          done={todo.done}
          key={todo.id}
        />
      ))}
    </>
  );
};
