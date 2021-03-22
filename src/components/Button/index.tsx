import React from 'react';
import { StyledButton } from './styles';

interface Props {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ text, onClick, disabled }: Props) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {text}
  </StyledButton>
);

export default Button;
