import { ITodo } from "../types/Todo";
import { Container } from "./Container";
import { TodoCard } from "./TodoCard";

interface ITodoListProps {
  todos: ITodo[];
}

export const TodoList = (props: ITodoListProps) => {
  const { todos } = props;
  return (
    <Container>
      {todos.map((todo) => (
        <TodoCard
          id={todo.id}
          title={todo.title}
          done={todo.done}
          key={todo.id}
        />
      ))}
    </Container>
  );
};
