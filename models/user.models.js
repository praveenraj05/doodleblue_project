const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Name is required"],
            trim: true
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            trim:true,
            lowercase: true,
            unique: true
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            select: false
        },

        isActive: {
            type: Boolean,
            default: true
        },

        role: {
            type: String,
            required: true,
            enum: ['student', 'teacher'],
            default: 'student',
            select: true,
        }
    },
    {
        timestamps: true,
        collection: 'collegedb'
    }
)

const User = mongoose.model('User', userSchema);
module.exports = User;