import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://thesurrianlife.files.wordpress.com/2011/07/macaque-monkey-canon-dslr-self-portrait-234x300.jpg"
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    },{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;
