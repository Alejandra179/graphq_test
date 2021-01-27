const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./../../models/User');


module.exports = {
    Query: {
        async users() {
            return await User.find()
        }
    },
    Mutation: {
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
            /* password = await bcrypt.hash(password,12); */
            const newUser = new User({
                name,
                username,
                email,
                password,
                role
            });
            const res = await newUser.save()
            /* const token = jwt.sign({
                _id: res.id,
                email: res.email,
                username: res.username
            }, { expiresIn: '1h'}) */
            console.log(email)
           /*  return {
                ...res._doc,
                _id: res._id,
            } */
            return {
                name,
                username,
                email,
                password,
                confirmPassword,
                role
            }
        },
        async deleteUser(_, {
            _id
        }) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, {
            _id,
            input
        }) {
            return await User.findByIdAndUpdate(_id, input, {
                new: true
            });
        }
    }
};