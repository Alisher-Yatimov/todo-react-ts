import styled from 'styled-components';
import logo from '../logo.svg';

const StyledHeader = styled.header`
    height: 60px;
    background: darkcyan;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
`;

const Logo = styled.img`
    height: 50px;
    width: 50px;
`;

const Navigation = styled.nav`
    width: 300px;
    display: flex;
    justify-content: space-between;
`;

const Link = styled.a`
    text-decoration: none;
    color: #fff;
    text-transform: capitalize;
    &:after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: #fff;
        border-radius: 2px;
        transform: scale(0);
        transition: all ease-in .3s;
    }
    &:hover:after {
        transform: scale(1);
    }
`;

export const Header = () => {
    return (
        <StyledHeader>
            <Logo src={logo}/>
            <Navigation>
                <Link href="#">home</Link>
                <Link href="#">about us</Link>
                <Link href="#">contact</Link>
            </Navigation>
        </StyledHeader>
    )
}