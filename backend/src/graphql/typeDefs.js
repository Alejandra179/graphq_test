const { gql } = require('apollo-server-express');

module.exports = gql`    
    input UserInput{
        name: String!
        email: String!
        password: String!
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

    type Stock{
        _id:ID
        categoria: String!
        subcategoria: String!
        marca_producto: String!
        marca_modelos:{
            marca: String,
            modelo: String
        }
        descripcion: String!
        tamanio: {
            ancho: Number,
            largo: Number,
            alto: Number,
            diametro: Number,
            espesor: Number,
            talle: String
        }
        contenido_neto: String
        tipo_contenedor: String
        detalles: String
        codigo: String
        stock:{
            cantidad: Number!
            color: String
        }
        precio: Number
        imagen: String
        extension_img: String
        grado_aceite_motor: String
        tipo_combustion: String
    }
    type User{
        _id: ID
        name: String!
        username: String!
        email: String!
        role: String!
    }
    type Query{
    }
    type Mutation{
        register(registerInput: RegisterInput) : User!
        login(email: String!, password: String!): User!
    }
    
 
`;

