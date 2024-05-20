import { Image } from "../models/images.model.js";

export async function fetchImageMappings() {
  try {
    const images = await Image.find({});
    const imageMap = new Map();

    images.forEach((image) => {
      imageMap.set(image.localPath, image.cloudinaryUrl);
    });

    return imageMap;
  } catch (error) {
    console.error("Error fetching image mappings:", error);
    throw error;
  }
}

export async function updateJsonDataWithCloudinaryUrls(jsonData) {
  const imageMap = await fetchImageMappings();

  const updateImageUrl = (path) => {
    return imageMap.get(path) || path; // Return the Cloudinary URL if it exists, otherwise return the original path
  };

  jsonData.img1 = updateImageUrl(jsonData.img1);
  jsonData.img2 = updateImageUrl(jsonData.img2);
  jsonData.img3 = updateImageUrl(jsonData.img3);
  jsonData.img4 = updateImageUrl(jsonData.img4);
  jsonData.img5 = updateImageUrl(jsonData.img5);

  return jsonData;
}
