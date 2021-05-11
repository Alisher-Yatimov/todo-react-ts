import { FC } from 'react';
import styled from 'styled-components';
import { Header } from '../Header';

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Container: FC = ({children}) => (
    <>
        <Header />
        <Wrapper>
            {children}
        </Wrapper>
    </>
);