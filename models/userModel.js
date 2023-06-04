const mongooose = require("mongoose")

const userShema = mongooose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"],
    },
    email: {
        type: String,
        required: [true, "Please add the user email address"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true, "Please add the password"],
    },
}, {
    timeStamp:true
});

module.exports = mongooose.model("User", userShema)
