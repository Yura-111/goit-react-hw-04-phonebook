import { Form } from 'formik';
import styled from 'styled-components';

export const FormStyl= styled(Form)`
box-sizing: border-box;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 8px;
color: rgb(42, 42, 42);
font-size: 20px;
margin-bottom: 32px;
`;

export const Button = styled.button`
color: rgb(255, 255, 255);
background-color: rgb(0, 119, 204);
padding: 8px 16px;
border-radius: 4px;
font-size: 16px;
display: block;
cursor: pointer;

:hover {
  background-color: rgb(0, 101, 173);
}
`;


