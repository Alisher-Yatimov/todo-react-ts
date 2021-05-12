import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../components/Container';
import { UserForm } from '../components/UserForm';
import { loginUser } from '../store/userSlice';

export const Login = (): React.ReactElement => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({ email: '', password: '' });
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser(userData));
    };
    return (
        <Container>
            <h1>login</h1>
            <UserForm
                emailValue={userData.email}
                passwordValue={userData.password}
                changeHandler={inputHandler}
                submitHandler={submitHandler}
            />
        </Container>
    );
};
