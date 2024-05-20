import { getAllPublicIds } from "./src/utils/Cloudinary.js";

// const apiData = require("./products.json");
import apiData from "./products.json";

async function updateImageUrlsWithPublicIds(apiData) {
  try {
    // Get all public IDs of the images uploaded to Cloudinary
    const publicIds = await getAllPublicIds();

    const updatedApiData = apiData.map((item, index) => ({
      ...item,
      img1: `https://res.cloudinary.com/dwjuzoiyz/image/upload/${publicIds[index]}/${item.img1}`,
      img2: `https://res.cloudinary.com/dwjuzoiyz/image/upload/${publicIds[index]}/${item.img2}`,
      img3: `https://res.cloudinary.com/dwjuzoiyz/image/upload/${publicIds[index]}/${item.img3}`,
      img4: `https://res.cloudinary.com/dwjuzoiyz/image/upload/${publicIds[index]}/${item.img4}`,
      img5: `https://res.cloudinary.com/dwjuzoiyz/image/upload/${publicIds[index]}/${item.img5}`,
    }));

    return updatedApiData;
  } catch (error) {
    console.error("Error updating image URLs with public IDs:", error);
    return apiData; // Return original data in case of error
  }
}

async function updateApiDataWithImageUrls() {
  try {
    // Update image URLs with Cloudinary URLs and public IDs
    const updatedApiData = await updateImageUrlsWithPublicIds(apiData);

    console.log("Updated API data with image URLs:", updatedApiData);
    // Here you can perform actions like updating your database with the updated API data
  } catch (error) {
    console.error("Error updating API data with image URLs:", error);
  }
}

// Call the function to update the API data with image URLs
updateApiDataWithImageUrls();
