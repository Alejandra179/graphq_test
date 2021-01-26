import React from 'react';
import App from './App';
import { ApolloClient } from '@apollo/client';
import {ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from "apollo-cache-inmemory"

const client = new ApolloClient({
    uri: 'https://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

export default(
    <ApolloProvider client={client}>
         <App/>
    </ApolloProvider>
)