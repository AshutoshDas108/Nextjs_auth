import mongoose from 'mongoose';

const usersModel = new mongoose.Schema({
     usernames: {
        type: String,
        required: [true,"please provide a username"],
        unique: true
     },
     passwords: {
        type: String,
        required: [true,"please provide a password"],
     },
     email: {
        type: String,
        required: [true,"please provide an email"],
        unique: true
     },
     isAdmin:{
         type: Boolean,
         default: false
     },
     isVarified:{
        type: Boolean,
        default: false
     },

     forgotPasswordToken : String ,
     forgotPasswordExpires: Date,
     varifyToken: String ,
     varifyExpires: Date

    })

const User = mongoose.models.users || mongoose.model('User', usersModel);

export default User;