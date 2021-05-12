import React from 'react';
import styled from 'styled-components';
import { Variant } from '../../types/Variants';

type ButtonType = 'button' | 'reset' | 'submit' | undefined;

export interface IBtnProps {
    variant: Variant;
    width: number;
    height: number;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    disabled?: boolean;
    type?: ButtonType;
}

const StyledButton = styled.button`
    background-color: ${(props: IBtnProps) => props.variant};
    border: none;
    width: ${(props: IBtnProps) => props.width * 12}px;
    height: ${(props: IBtnProps) => props.height * 12}px;
    font-size: 1.2em;
    border-radius: ${(props: IBtnProps) => props.width}px;
    outline: none;
    transition: all ease-in 0.1s;
    &:hover {
        transform: scale(1.1);
    }
`;

export const Button = (props: IBtnProps): React.ReactElement => <StyledButton {...props}>{props.children}</StyledButton>;
