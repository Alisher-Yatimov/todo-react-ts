import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../components/Container";
import { UserForm } from "../components/UserForm";
import { registerUser } from "../store/userSlice";
import { useHistory } from "react-router-dom";
import { routes } from "../constants/routes";
import { IState } from "../types/State";

export const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector((state: IState) => state.user.error);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registerUser(userData));
    if(!error) {
        history.push(routes.login)
    }
  };
  return (
    <Container>
      <h1>register</h1>
      <UserForm
        changeHandler={changeHandler}
        emailValue={userData.email}
        passwordValue={userData.password}
        submitHandler={submitHandler}
      />
    </Container>
  );
};
