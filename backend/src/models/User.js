const {
    Schema,
    model
} = require('mongoose');



const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        length:{
            min: 6
        },
        required: true
    },
    role: {
        type: String,
        enum: ['admin','propietario','cliente'],
        default:'cliente'
    }
}, {
    timestamps: true
})


module.exports = model('Users', UserSchema);