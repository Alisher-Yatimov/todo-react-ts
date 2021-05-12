import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ITodo } from '../../types/Todo';
import { Variant } from '../../types/Variants';
import { Button } from '../Button';
import { checkTodo, deleteTodo } from '../../store/todosSlice';
import { IState } from '../../types/State';

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
    text-decoration: ${(props: ITitle) => (props.done ? 'line-through' : '')};
`;

const BtnsBlock = styled.div`
    display: flex;
    width: 110px;
    justify-content: space-around;
`;

export const TodoCard = (props: ICardProps): React.ReactElement => {
    const dispatch = useDispatch();
    const token = useSelector((state: IState) => state.user.token.token);
    const { title, id, done } = props;
    const removeHandler = (): void => {
        dispatch(deleteTodo({ todoId: id, token }));
    };
    const checkHandler = (): void => {
        dispatch(checkTodo({ todoId: id, token }));
    };
    return (
        <Card>
            <Title done={done}>{title}</Title>
            <BtnsBlock>
                <Button width={4} height={4} variant={Variant.Primary} onClick={checkHandler}>
                    ✔️
                </Button>
                <Button width={4} height={4} variant={Variant.Danger} onClick={removeHandler}>
                    🗑️
                </Button>
            </BtnsBlock>
        </Card>
    );
};
