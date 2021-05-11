import styled from "styled-components";
import logo from "../../logo.svg";
import sunImg from "../../sun.svg";
import moonImg from "../../moon.svg";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { IState, IStore } from "../../types/State";
import { changeTheme } from "../../store/themeSlice";
import { IPreset } from "../../types/Theme";
import { NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";
import { Button } from '../Button'
import { Variant } from "../../types/Variants";
import {logout} from '../../store/userSlice';

const StyledHeader = styled.header<IHeaderProps>`
  height: 60px;
  background: ${(props) => props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  fill: red;
`;

const Navigation = styled.nav`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const activeClassName = 'nav-item-active'

const Link = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  text-transform: capitalize;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.text};
    border-radius: 2px;
    transform: scale(0);
    transition: all ease-in 0.3s;
  }
  &:hover:after {
    transform: scale(1);
  }
  &.${activeClassName}::after{
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: white;
    transform: scale(1);
  }
`;

const Img = styled.img`
    width: 20px;
    height: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;


export interface IHeaderProps extends IStyledProps {
  children?: React.ReactNode;
}

export interface IStyledProps {
  theme?: IPreset;
}

export const Header = (props: IHeaderProps) => {
  const dispatch = useDispatch();
  const checked = useSelector((state: IStore) => state.theme);
  const isAuthorized = useSelector((state: IState) => !!state.user.token?.token)
  const onChange = () => {
    dispatch(changeTheme());
  };
  const logoutBtnHandler = () => {
    dispatch(logout())
  }

  return (
    <StyledHeader>
      <Logo src={logo} />
      <Navigation>
        {!isAuthorized && (
          <>
            <Link to={routes.login}>Login</Link>
            <Link to={routes.register}>Register</Link>
          </>
        )}
        {isAuthorized && (
          <Button height={3} width={6} variant={Variant.secondary} onClick={logoutBtnHandler}>logout</Button>
        )}
        <Switch
          onChange={onChange}
          checked={checked}
          checkedIcon={<Img src={sunImg} />}
          uncheckedIcon={<Img src={moonImg}/>}
        />
      </Navigation>
    </StyledHeader>
  );
};
