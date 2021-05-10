import styled from "styled-components";
import logo from "../../logo.svg";
import sunImg from "../../sun.svg";
import moonImg from "../../moon.svg";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../types/State";
import { changeTheme } from "../../store/themeSlice";
import { IPreset } from "../../types/Theme";
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

const Link = styled.a<IHeaderProps>`
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
  const onChange = () => {
    dispatch(changeTheme());
  };

  return (
    <StyledHeader>
      <Logo src={logo} />
      <Navigation>
        <Link href="#">home</Link>
        <Link href="#">about us</Link>
        <Link href="#">contact</Link>
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
