import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: false
    },
    authType: {
        type: String,
        default: 'local'
    },
    role: {
        type: String,
        enum: ['student', 'teacher', 'admin'],
        default: 'user'
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);

// User => id, username, role, email, password, avatar, dept, courses[ref], posts[ref], year, section, access and refresh tokens.

// courses[ref] is okay, but the truth of enrollment should live in Course or an Enrollment model later.

// access & refresh tokens → store carefully.Short - lived access, hashed refresh.Security will matter if colleges are involved.