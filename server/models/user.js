import mongoose from "mongoose";

const userSchema = mongoose.Schema({
username: { type: String, required:  true },
mobile: { type: String, required:  true },
  password: { type: String, required: true },
  
  createdAt: {
    type: Date,
    default: new Date(),
},
});

export default mongoose.model("User", userSchema);
