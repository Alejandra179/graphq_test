const { gql } = require('apollo-server-express');

module.exports = gql`
    type Query{
        users: [User]
    }
    
    type User{
        _id: ID
        name: String!
        username: String!
        email: String!
        role: String!

    }
    input RegisterInput {
        name: String!
        username: String!
        email: String!
        password: String!
        confirmPassword: String!
        role: String
        
    }
    type Mutation{
        register(registerInput: RegisterInput) : User,
        deleteUser(_id:ID):User,
        updateUser(_id:ID,input: UserInput):User
    }
    input UserInput{
        name: String!
        email: String!
        password: String!
        role: String!
    }
 
`;

