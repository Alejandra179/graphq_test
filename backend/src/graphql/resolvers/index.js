const usersResolvers = require('./users');
const stocksResolvers = require('./stocks');
module.exports ={
    Query:{
        ...usersResolvers.Query,
        ...stocksResolvers.Query
        
    },
    Mutation:{
        ...usersResolvers.Mutation,
        ...stocksResolvers.Mutation
    }
}