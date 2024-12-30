"use client";

import { Link } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
function createSlug(input: string): string {
  // Replace special characters with "-" and remove extra spaces
  const slug = input
    .toLowerCase() // Convert the string to lowercase
    .replace(/[^a-z0-9\s-]/g, "") // Remove any characters that are not alphanumeric, space, or hyphen
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
    .trim() // Remove leading and trailing spaces
    .replace(/\s/g, "-"); // Replace spaces with hyphens

  return slug;
}
interface ImageUploaderProps {
  title: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ title }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [altText, setAltText] = useState<string>(createSlug(title));
  const [uploading, setUploading] = useState<boolean>(false);
  const [folderName, setFolderName] = useState<string>(createSlug(title));

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!imageFile) {
      alert("Please select an image to upload.");
      return;
    }

    setUploading(true);

    try {
      if (folderName?.length > 6 && altText?.length > 6) {
        // Convert the image file to a buffer (binary data) using FileReader
        const reader = new FileReader();
        reader.onloadend = async () => {
          const imageBuffer = reader.result as ArrayBuffer; // Get the buffer

          // Create a FormData instance to send title, filename, and imageBuffer
          const formData = new FormData();
          formData.append("title", createSlug(folderName)); // Add title (replace with actual title)
          formData.append("filename", createSlug(altText)); // Add the filename
          formData.append("imageBuffer", new Blob([imageBuffer])); // Add the imageBuffer

          // Send the data in the POST request body
          const response = await fetch("/api/uploadImage", {
            method: "POST",
            body: formData, // Send the form data (including title, filename, and imageBuffer)
          });

          const result = await response.json();
          if (result.error) {
            console.log("Error:", result.error);
            alert("Error uploading the image.");
          } else {
            alert("Image uploaded successfully!");
          }
        };

        // Read the image as a binary array buffer
        reader.readAsArrayBuffer(imageFile);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Error uploading the image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col w-full">
        <label
          htmlFor="featureImage"
          className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
        >
          Image
        </label>
        <input
          type="file"
          id="featureImage"
          name="featureImage"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
        />
        {previewImage && (
          <div className="mt-2 aspect-[16/9] w-full border rounded overflow-hidden bg-gray-100 relative">
            <Image
              src={previewImage}
              alt={altText || "Feature Image Preview"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col w-full">
        <label
          htmlFor="alt"
          className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
        >
          Image Name
        </label>
        <input
          type="text"
          id="alt"
          name="alt"
          placeholder="Image name"
          value={altText}
          onChange={(e) => setAltText(createSlug(e.target.value))}
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
        />
      </div>

      <div className="flex flex-col w-full">
        <label
          htmlFor="folder-name"
          className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
        >
          Folder Name
        </label>
        <input
          type="text"
          id="folder-name"
          name="alt"
          placeholder="Alt Text for Image"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
        />
      </div>
      <p className="text-lg underline text-p1">
        {`https://exggfeypqucbibabxodx.supabase.co/storage/v1/object/public/images/${folderName}/${altText}.avif`}
      </p>
      <Link
        href={`https://exggfeypqucbibabxodx.supabase.co/storage/v1/object/public/images/${folderName}/${altText}.avif`}
      >
        Click To View
      </Link>

      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`mt-2 px-3 text-white rounded-lg text-lg py-2 max-w-xs font-bold ${
          uploading ? "bg-gray-400" : "bg-p1 hover:bg-orange-500"
        }`}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
};

export default ImageUploader;
