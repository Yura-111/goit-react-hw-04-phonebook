import styled from 'styled-components';

export const Description = styled.p`
color: rgb(42, 42, 42);
font-size: 24px;
margin: 0;
`;

export const Buttons = styled.button`
color: rgb(255, 255, 255);
background-color: rgb(0, 119, 204);
padding: 8px 16px;
border-radius: 4px;
font-size: 16px;
display: block;
cursor: pointer;
transition: all 250ms linear 0s;

:hover {
  background-color: rgb(0, 101, 173);
}
`;
