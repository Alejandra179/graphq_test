const express = require('express');
const typeDefs = require('./graphql/typeDefs');
const { ApolloServer } = require('apollo-server-express'); 
const {resolvers} = require('./graphql/resolvers');

const app = express();

//config
app.set('port', process.env.PORT || 4000 );

// Provide resolver functions for your schema fields

const server = new ApolloServer({ typeDefs, resolvers });


server.applyMiddleware({ app })

module.exports = app;