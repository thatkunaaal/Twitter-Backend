import mongoose, { Model, Schema } from "mongoose";

const hashtagSchema = new Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },
  tweets: [{ type: mongoose.Types.ObjectId }],
});

const Hashtags = mongoose.model("Hashtags", hashtagSchema);

export { Hashtags };
