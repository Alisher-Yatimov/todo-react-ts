import { Variant } from "../../types/Variants";
import { Button } from "../Button";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  align-items: center;
`;

const Input = styled.input`
  align-self: stretch;
  height: 30px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.main};
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  outline: none;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

interface IUserFormProps {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailValue: string;
  passwordValue: string;
}

export const UserForm = (props: IUserFormProps) => {
  const { submitHandler, changeHandler } = props;
  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="email"
        name="email"
        onChange={changeHandler}
        placeholder="enter email"
        required
      />
      <Input
        type="password"
        name="password"
        onChange={changeHandler}
        placeholder="enter password"
        required
      />
      <Button height={3} width={7} variant={Variant.primary} type="submit">
        sing in
      </Button>
    </Form>
  );
};
