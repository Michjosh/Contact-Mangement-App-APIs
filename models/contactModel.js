const mongooose = require("mongoose")

const contactShema = mongooose.Schema({
    user_id:{
        type: mongooose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the contact"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email address"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact phone number"],
    },
},
    {
        timeStmp: true
    }
)

module.exports =mongooose.model("Conatcs", contactShema)