import dotenv from "dotenv";
import { connectDB } from "./src/configs/db.js";
import { app } from "./app.js";
// import { uploadImagesFromDirectory } from "./src/utils/Cloudinary.utils.js";
// import fs from "fs/promises";
// import path from "path";

dotenv.config({
  path: "./.env",
});

connectDB();

// async function startServer() {
//   try {
//     await connectDB();
//     console.log("Connected to MongoDB");

//     const directory = "./apiImages";

//     // Check if the images directory is not empty
//     const files = await fs.readdir(directory);
//     if (files.length > 0) {
//       // Call uploadImagesFromDirectory only if there are files in the directory
//       const uploadedImages = await uploadImagesFromDirectory(directory);
//       console.log("All images uploaded and saved successfully.");
//     } else {
//       console.log("No images found in the directory. Skipping upload.");
//     }
//   } catch (error) {
//     console.error("Error during server start:", error);
//   }
// }

app.listen(process.env.PORT || 8000, () => {
  console.log(`⚙️  Server is running at port : ${process.env.PORT || 8000}`);
});

// startServer().catch(console.error);
