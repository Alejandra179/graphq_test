require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { createServer } = require('http')
const { ApolloServer, PubSub } = require('apollo-server-express')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const startServer = async () => {
    const PORT = process.env.PORT || 4000
    const ATLAS_URI = process.env.ATLAS_URI
    const app = express()
    const httpServer = createServer(app)
    const pubsub = new PubSub()
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => ({ req, pubsub })
    })
    
    server.applyMiddleware({ app, path: '/graphql', cors: false })
    server.installSubscriptionHandlers(httpServer)

    await mongoose.connect(ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log('ERROR: ' + err)
        process.exit()
    })

    httpServer.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`)
    })
}

startServer()