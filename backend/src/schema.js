const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query{
        usuarios: [Usuario],
        users: [User]
    }
    type Usuario{
        nombre: String,
        contrasenia: String
    }
    

    type User{
        _id: ID
        name: String!
        email: String
        password: String!

    }
    
    type Mutation{
        createUser(input: UserInput) : User
        deleteUser(_id:ID):User
        updateUser(_id:ID,input: UserInput):User
    }

    input UserInput{
        name: String!
        email: String!
        password: String!
        role: String!

    }
 
`;

module.exports= typeDefs;