import React from 'react';
import App from './App';
import { ApolloClient, InMemoryCache  } from '@apollo/client';
import {ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

export default(
    <ApolloProvider client={client}>
         <App/>
    </ApolloProvider>
)