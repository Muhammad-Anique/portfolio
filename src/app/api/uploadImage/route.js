import { NextResponse } from "next/server";
import { uploadImageToSupabase } from "../../lib/imageUploaderService"; // Your upload function

// Handle POST request to upload image
export async function POST(req) {
  try {
    // Parse the form data
    const formData = await req.formData(); // This method reads multipart form data
    const title = formData.get("title"); // Extract title
    const filename = formData.get("filename"); // Extract filename
    const imageBuffer = formData.get("imageBuffer"); // Extract imageBuffer as a Blob

    // Ensure all required fields are present
    if (!title || !filename || !imageBuffer) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert imageBuffer (Blob) into a buffer
    const buffer = Buffer.from(await imageBuffer.arrayBuffer());

    // Upload the image buffer to Supabase or other cloud storage
    const result = await uploadImageToSupabase(buffer, filename, title);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Error in POST /uploadImage:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
