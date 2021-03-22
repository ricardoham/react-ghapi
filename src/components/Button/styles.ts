import styled from 'styled-components';

interface StyledProps {
  disabled?: boolean;
}

export const StyledButton = styled.button<StyledProps>`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 12px;
  margin-right: 8px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  background-color: ${(props) => (props.disabled ? '#b2bec3' : '#4A9FC6')};
`;
