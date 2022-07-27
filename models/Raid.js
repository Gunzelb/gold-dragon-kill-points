import mongoose from "mongoose";
const Schema = mongoose.Schema;

let RaidSchema = new Schema({
    name: {
        name: String,
        required: true,
    },
    date: Date,
    leader: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }]
})