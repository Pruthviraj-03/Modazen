import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  localPath: { type: String, required: true, unique: true },
  cloudinaryUrl: { type: String, required: true },
});

const Image = mongoose.model("Image", imageSchema);
export { Image };
