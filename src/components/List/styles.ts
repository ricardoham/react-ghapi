import styled from 'styled-components';

export const StyledList = styled.div`
  border: 4px solid #2bcbba;
  border-radius: 8px;
  background-color: #0fb9b1;
  color: #000;
  margin: 12px;
  padding: 24px;
  text-align: justify;
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  border-bottom: 2px solid;
`;

export const HeaderItem = styled.span`
  align-self: center;
  flex: 1;
`;

export const ItemsContainer = styled.div`
  display: flex;
`;

export const Items = styled.div`
  margin-right: 5px;
  width: 300px;
  flex: 1;
  font-size: 16px;
`;
