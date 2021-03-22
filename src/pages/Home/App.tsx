import React from 'react';
import { useQuery } from '@apollo/client';
import { REPOSITORY } from '../../graphql/query';
import Button from 'components/Button';
import List from 'components/List';
import Loader from 'components/Loader';

import { Container } from './styles';

function App() {
  const { loading, error, data } = useQuery(REPOSITORY, {
    variables: {
      queryString: 'react sort:stars',
      after: null,
      first: 10,
      before: null,
      last: null,
    },
  });

  if (error) return <div>Error {error.message} </div>;

  return (
    <Container>
      {loading ? <Loader /> : <List data={data.search.nodes} />}
      <Button text="Previous" onClick={() => console.log('CLICKED!')} />
      <Button text="Next" onClick={() => console.log('CLICKED!')} />
    </Container>
  );
}

export default App;
