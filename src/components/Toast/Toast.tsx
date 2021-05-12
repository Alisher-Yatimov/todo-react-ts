import { Variant } from '../../types/Variants';
import styled from 'styled-components';
import React, { useEffect } from 'react';

const ToastStyled = styled.div`
    position: absolute;
    padding: 0 25px;
    height: 50px;
    border: 1px solid transparent;
    box-shadow: 0 0 5px #000;
    background: ${(props: IToastProps) => props.variant};
    right: 50px;
    top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #fff;
`;

interface IToastProps {
    message: string;
    onClose: (event?: React.MouseEvent) => void;
    closeDelay: number;
    variant: Variant;
}

export const Toast = (props: IToastProps): React.ReactElement => {
    const { message, closeDelay, onClose } = props;
    useEffect(() => {
        setTimeout(() => {
            onClose();
        }, closeDelay);
    });

    return (
        <ToastStyled onClick={onClose} {...props}>
            {message}
        </ToastStyled>
    );
};
