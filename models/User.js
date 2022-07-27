import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a username.'],
        maxlength: [12, 'Name cannot be more than 12 characters.'],
    },
    class: {
        type: String,
        required: true,
    },
    server: {
        type: String,
        required: true,
    },
    good_faction: {
        type: Boolean,
    },
    good_boy_points: {
        type: Number,
        default: 0,
    },
    raid_history: [{
        type: Schema.Types.ObjectId,
        ref: "Raid",
    }],
})

export default mongoose.models.User || mongoose.model('User', UserSchema)