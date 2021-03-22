import React from 'react';
import { GoMarkGithub, GoStar, GoRepoForked } from 'react-icons/go';
import { Repository } from 'model/repository';
import { StyledList, HeaderList, ItemsContainer, Items, HeaderItem } from './styles';

interface Props {
  data: Repository[];
}

const List = ({ data }: Props) => {
  console.log('data', data);

  return (
    <StyledList>
      <HeaderList>
        <HeaderItem>
          <GoMarkGithub />
          Name
        </HeaderItem>
        <HeaderItem>
          <GoStar />
          Stars
        </HeaderItem>
        <HeaderItem>
          <GoRepoForked />
          Fork
        </HeaderItem>
      </HeaderList>
      {data.map((item: Repository) => (
        <ItemsContainer key={item.id}>
          <Items>{item.name}</Items>
          <Items>{item.stargazerCount}</Items>
          <Items>{item.forkCount}</Items>
        </ItemsContainer>
      ))}
    </StyledList>
  );
};

export default List;
