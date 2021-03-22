import React from 'react';
import { useQuery } from '@apollo/client';
import { REPOSITORY } from '../../graphql/query';
import { Variables } from 'model/variables';
import Button from 'components/Button';
import List from 'components/List';
import Loader from 'components/Loader';

import { Container } from './styles';

function App() {
  const { loading, error, data, fetchMore } = useQuery(REPOSITORY, {
    variables: {
      queryString: 'react sort:stars',
      after: null,
      first: 10,
      before: null,
      last: null,
    },
  });

  const handlePage = (variables: Variables) => {
    fetchMore({
      variables: {
        after: variables.after,
        first: variables.first,
        before: variables.before,
        last: variables.last,
      },

      updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
        const newNodes = fetchMoreResult.search.nodes;

        return newNodes.length ? fetchMoreResult : previousResult;
      },
    });
  };

  if (error) return <div>Error {error.message} </div>;

  return (
    <Container>
      {loading ? <Loader /> : <List data={data.search.nodes} />}
      <Button
        text="Previous"
        onClick={() =>
          handlePage({
            first: null,
            after: null,
            last: 10,
            before: data.search.pageInfo.startCursor || null,
          })
        }
      />
      <Button
        text="Next"
        onClick={() =>
          handlePage({
            first: 10,
            after: data.search.pageInfo.endCursor || null,
            last: null,
            before: null,
          })
        }
      />
    </Container>
  );
}

export default App;
