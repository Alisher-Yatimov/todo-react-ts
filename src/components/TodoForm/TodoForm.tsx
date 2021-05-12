import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Variant } from '../../types/Variants';

const Form = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    font-size: 1.1em;
    margin-right: 1rem;
`;

interface IFormProps {
    onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
    onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    placeholder?: string;
    inputValue: string;
}

export const TodoForm = ({ placeholder, onChange, onSubmit, inputValue }: IFormProps): React.ReactElement => {
    return (
        <Form onSubmit={onSubmit}>
            <Input placeholder={placeholder} onChange={onChange} value={inputValue} />
            <Button variant={Variant.Warning} width={6} height={3} disabled={!inputValue}>
                add
            </Button>
        </Form>
    );
};
