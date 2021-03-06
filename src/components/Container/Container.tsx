import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header';

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface IContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps): React.ReactElement => (
    <>
        <Header />
        <Wrapper>{children}</Wrapper>
    </>
);
