import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../components/Container';
import { UserForm } from '../components/UserForm';
import { registerUser } from '../store/userSlice';

export const Register = (): React.ReactElement => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({ email: '', password: '' });
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(registerUser(userData));
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
