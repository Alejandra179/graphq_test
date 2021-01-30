const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./../../models/User');
const { UserInputError } = require('apollo-server');
const { validacionRegistro, validacionLogin } = require('./../../util/validationUser')
const SECRET_KEY = process.env.SECRET_KEY;
module.exports = {
    Mutation: {
        async login(_,{email,password}){
           const {errors,valid} = validacionLogin(email,password)
            if(!valid){
                throw new UserInputError('Errors', { errors });
            }
            const user = await User.findOne({email});
            if(!user){
                errors.general = 'Correo de usuario no encontrado';
                throw new UserInputError('Error en la credencial', {errors})
            }
            const match = await bcrypt.compare(password, user.password)
            if(!match){
                errors.general = 'Contraseña incorrecta';
                throw new UserInputError('Error en la credencial', {errors})
            }
            return {
                ...user._doc,
                _id: user._id,
           } 

            
        },
        async register(_, {
            registerInput: {
                name,
                username,
                email,
                password,
                confirmPassword,
                role
            }
        }) {
            const {valid, errors} = validacionRegistro(
                name,
                username,
                email,
                password,
                confirmPassword,
                role
            ) 
            if(!valid){
                throw new UserInputError('Errors', { errors });
            }
            const user = await User.findOne({email});
            if(user){
                throw new UserInputError('Ya existe un usuario registrado con este correo', {
                    errors:{
                        email:'Este correo ya esta en uso'
                    }
                })
            }
            password = await bcrypt.hash(password,12); 
            const newUser = new User({
                name,
                username,
                email,
                password,
                role
            });
            const res = await newUser.save()
           const token = jwt.sign({
                _id: res.id,
                email: res.email,
                username: res.username
            },SECRET_KEY, { expiresIn: '1h'})  
           return {
                ...res._doc,
                _id: res._id,
                token
           } 
           
        },
        
    }
};