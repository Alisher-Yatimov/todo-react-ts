import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const Container: FC = ({children}) => <Wrapper>{children}</Wrapper>