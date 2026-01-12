import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema({
  user_id: { type: mongoose.Types.ObjectId },
  content: { type: String, maxLength: 250 },
  comment_id: { type: mongoose.Types.ObjectId, default: null },
  likes: { type: Number },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

export { Tweet };
