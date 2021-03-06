import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { IconContext } from 'react-icons/lib';
import { client } from './graphql/client';
import App from './pages/Home/App';
import StyledGlobal from './globalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StyledGlobal />
      <IconContext.Provider value={{ className: 'icons' }}>
        <App />
      </IconContext.Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
