import React from 'react';
import { useQuery } from '@apollo/client';
import { REPOSITORY } from './graphql/query';
import { Repository } from 'model/repository';

import './App.css';

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
  if (loading) return <div>Loading</div>;

  return (
    <div className="App">
      {data.search.nodes.map((item: Repository) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.stargazerCount}</div>
          <div>{item.forkCount}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
