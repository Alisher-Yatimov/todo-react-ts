import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ITodo } from "../../types/Todo";
import { Variant } from "../../types/Variants";
import { Button } from "../Button";
import { checkTodo, deleteTodo } from "../../store/todosSlice";

export interface ICardProps extends ITodo {
  children?: React.ReactNode;
}

interface ITitle {
    children?: React.ReactNode;
    done: boolean;
}

const Card = styled.div`
  width: 80%;
  height: 75px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  padding: 010px;
  align-items: center;
`;

const Title = styled.p`
    text-decoration: ${(props: ITitle) => props.done ? 'line-through' : ''};
`;

const BtnsBlock = styled.div`
  display: flex;
  width: 110px;
  justify-content: space-around;
`;

export const TodoCard = (props: ICardProps) => {
  const dispatch = useDispatch();
  const { title, id, done } = props;
  const removeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteTodo(id));
  };
  const checkHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(checkTodo(id));
  };
  return (
    <Card>
      <Title done={done}>{title}</Title>
      <BtnsBlock>
        <Button
          width={4}
          height={4}
          variant={Variant.primary}
          onClick={checkHandler}
        >
          ✔️
        </Button>
        <Button
          width={4}
          height={4}
          variant={Variant.danger}
          onClick={removeHandler}
        >
          🗑️
        </Button>
      </BtnsBlock>
    </Card>
  );
};