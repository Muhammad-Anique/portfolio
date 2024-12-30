import sharp from "sharp";
import { supabase } from "./supabase"; // Assuming you have Supabase client setup in this file
// Function to handle image upload and conversion

export const uploadImageToSupabase = async (imageBuffer, filename, title) => {
  try {
    // Convert the image to AVIF format using Sharp
    const avifBuffer = await sharp(imageBuffer).toFormat("avif").toBuffer();
    console.log(filename);

    // Construct the file path with .avif extension only
    const filePath = `${title}/${filename}.avif`;

    // Upload the AVIF image buffer to Supabase
    const { data, error } = await supabase.storage
      .from("images") // Ensure you are using the correct bucket name
      .upload(filePath, avifBuffer, {
        contentType: "image/avif", // Explicitly specify the content type
      });

    if (error) throw error;

    return data; // Return the response data from Supabase
  } catch (err) {
    console.log("Error:", err.message);
    throw new Error("Error converting or uploading image: " + err.message);
  }
};
