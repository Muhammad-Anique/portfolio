"use client";
import React from "react";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import ImageUploader from "../_components/_bloggerComponents/ImageUploader";
import SectionAdder from "../_components/_bloggerComponents/SectionAdder";
import BlogContent from "../_components/BlogContent";
import usePersistentState from "../_hooks/usePersitentState";
import { Trash2 } from "lucide-react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [login, setLogin] = useState(false);
  const [isFeatureButtonClick, setIsFeatureButtonClick] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Reset the error state

    const { user, session, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(user, session);

    if (error) {
      setError(error.message);
    } else {
      setLogin(true);
    }
  };

  // const [formData, setFormData] = useState({
  //   title: "",
  //   slug: "",
  //   blogType: "",
  //   keywords: "",
  //   excerpt: "",
  //   theme:
  //     'I need this article to be lengthy, contain lists, code blocks and longer paragraphs. I need paragraphs to be single line htmt paragaraph wrapped in <p></p> tags. The pargarphs should contain <b></b>, <i></i>, <emp></emp> tags. Moreover, there should be links with proper link not just example.com i need proper href links and add style="color: #0096FF; text-decoration: underline;".  ',
  //   category: "",
  //   priority: "",
  //   readTime: "",
  //   primaryColor: "",
  //   secondaryColor: "",
  //   featureImage: "",
  //   featureAlt: "",
  //   tags: ["", "", "", "", ""],
  // });
  // const [blocks, setBlocks] = useState([]);

  const [formData, setFormData] = usePersistentState("formData", {
    title: "",
    slug: "",
    blogType: "",
    keywords: "",
    excerpt: "",
    theme:
      'I need this article to be lengthy, contain lists, code blocks and longer paragraphs. I need paragraphs to be single line htmt paragaraph wrapped in <p></p> tags. The pargarphs should contain <b></b>, <i></i>, <emp></emp> tags. Moreover, there should be links with proper link not just example.com i need proper href links and add style="color: #0096FF; text-decoration: underline;".',
    category: "",
    priority: "",
    readTime: "",
    primaryColor: "",
    secondaryColor: "",
    featureImage: "",
    featureAlt: "",
    articleFacility: "",
    tags: ["", "", "", "", ""],
  });

  const [blocks, setBlocks] = usePersistentState("blocks", []);
  const clearData = () => {
    setFormData({
      title: "",
      slug: "",
      blogType: "",
      keywords: "",
      excerpt: "",
      theme:
        'I need this article to be lengthy, contain lists, code blocks and longer paragraphs. I need paragraphs to be single line htmt paragaraph wrapped in <p></p> tags. The pargarphs should contain <b></b>, <i></i>, <emp></emp> tags. Moreover, there should be links with proper link not just example.com i need proper href links and add style="color: #0096FF; text-decoration: underline;".',
      category: "",
      priority: "",
      readTime: "",
      articleFacility: "",
      primaryColor: "",
      secondaryColor: "",
      featureImage: "",
      featureAlt: "",
      tags: ["", "", "", "", ""],
    });
    setBlocks([]);
    localStorage.removeItem("formData");
    localStorage.removeItem("blocks");
  };
  // Handle the change for each tag
  const handleTagChange = (index, value) => {
    const updatedTags = [...formData.tags];
    updatedTags[index] = value;
    setFormData({ ...formData, tags: updatedTags });
  };
  function createSlug(input) {
    // Replace special characters with "-" and remove extra spaces
    const slug = input
      .toLowerCase() // Convert the string to lowercase
      .replace(/[^a-z0-9\s-]/g, "") // Remove any characters that are not alphanumeric, space, or hyphen
      .replace(/\s+/g, " ") // Replace multiple spaces with a single space
      .trim() // Remove leading and trailing spaces
      .replace(/\s/g, "-"); // Replace spaces with hyphens
    return slug;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setFormData({
        ...formData,
        [name]: value,
        ["slug"]: createSlug(value),
        ["featureAlt"]: `${e.target.value} Feature Image`,
      });
      setPrompt(
        `Create a detailed article on the following topic:-\n\n Topic : ${e.target.value} \n\n Article Writing Details: Give detailed code examples, explain the concept deeply. Start the article with preliminary paragraph starting with a hook could be anecdote, facts, question or other. Provide the following details:\n 1. Article (Detailed long)\n 2. Meta Description 80 words at least\n 3. Give 5 Tags\n 4. Give me Read Time Also \n5. Provide at least 10 links to actual articles or references you got refer them somewhare in paragraphs`
      );
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleArticleFacility = (e) => {
    setFormData({ ...formData, ["articleFacility"]: e.target.value });
  };

  const uploadArticle = async () => {
    const blogData = {
      blogTitle: formData.title,
      blogExcerpt: formData.excerpt,
      readTime: formData.readTime,
      slug: formData.slug,
      primaryColor: formData.primaryColor,
      secondaryColor: formData.secondaryColor,
      priority: formData.priority,
      blogFeatureImage: formData.featureImage,
      blogFeatureAlt: formData.featureAlt,
      category: formData.category,
      blogBody: {
        tags: formData.tags,
        blocks: blocks,
      },
    };

    try {
      const { data, error } = await supabase
        .from("blogs") // Replace "blogs" with your Supabase table name
        .insert([blogData]);

      if (error) {
        console.error("Error uploading article:", error);
        alert("Failed to upload the article.");
      } else {
        console.log("Article uploaded successfully:", data);
        alert("Article uploaded successfully!");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Something went wrong.");
    }
  };

  const [prompt, setPrompt] = useState(
    ` Create a detailed article on the following topic:-\n Topic :  Debouncing vs throttling in Javascript: Practical Use Cases \n Article Writing Details: Give detailed code examples, explain the concept deeply. Start the article with preliminary paragraph starting with a hook could be anecdote, facts, question or other. Provide the following details:\n 1. Article (Detailed long)\n 2. Meta Description 80 words at least\n 3. Give 5 Tags\n 4. Give me Read Time Also \n5. Provide at least 10 links to actual articles or references you got refer them somewhare in paragraphs`
  );
  return (
    <>
      <button
        onClick={() => {
          clearData();
        }}
        className="fixed bottom-4  rounded-full right-4 bg-p1 flex items-center justify-center w-[70px] h-[70px]"
      >
        <Trash2 className="w-5 h-5 text-zinc-200" />
      </button>
      <div className="flex flex-row gap-3 px-16 h-full min-h-screen">
        <div className="flex  max-w-[1600px] flex-col items-center  w-full h-full min-h-screen justify-center">
          {!login ? (
            <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
              <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
              {error && (
                <p className="text-red-500 text-center mb-4">{error}</p>
              )}
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-lg font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="p-2 border rounded-md"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="password" className="text-lg font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="p-2 border rounded-md"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md mt-4"
                >
                  Login
                </button>
              </form>
              <div className="mt-4 text-center">
                <p>
                  Dont have an account?{" "}
                  <a href="/signup" className="text-blue-500">
                    Sign up here
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col bg-white/70 py-32 px-10 h-full gap-4">
              <h1 className="font-lato font-extrabold text-5xl text-zinc-900 dark:text-zinc-200">
                Blogger
              </h1>
              <p className="text-zinc-700 dark:text-zinc-300 text-lg">
                With the power of AI, you can now generate high-quality blog
                posts tailored to your needs. Simply fill out the form, select
                the appropriate blog type—be it technology, lifestyle, business,
                or any niche of your choice—and let AI craft engaging,
                SEO-optimized content for you. Save time, enhance creativity,
                and focus on what matters most: sharing your ideas with the
                world!
              </p>
              <h1 className="font-lato font-extrabold text-3xl text-zinc-900 dark:text-zinc-200">
                Prompt
              </h1>
              <textarea
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
                required
                className="mt-1 p-2 w-full border min-h-[230px] font-lato  focus:outline-none focus:border-p1 bg-zinc-50 rounded-lg"
                rows={4} // Adjust the number of rows as needed
              ></textarea>

              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-row gap-3 items-center justify-between w-full h-auto">
                  <div className="flex flex-col  w-full">
                    <label
                      htmlFor="title"
                      className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Blog Title"
                      value={formData.title}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                      className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="slug"
                      className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
                    >
                      Slug
                    </label>
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      placeholder="Slug"
                      value={formData.slug}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
                    />
                  </div>
                </div>

                <div className="flex flex-col  w-full">
                  <label
                    htmlFor="excerpt"
                    className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
                  >
                    Excerpt
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
                    rows={4} // Adjust the number of rows as needed
                  ></textarea>
                </div>

                <div className="flex flex-col  w-full">
                  <label
                    htmlFor="theme"
                    className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
                  >
                    Theme
                  </label>
                  <textarea
                    id="theme"
                    name="theme"
                    value={formData.theme}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
                    rows={4} // Adjust the number of rows as needed
                  ></textarea>
                </div>

                <div className="flex flex-row gap-3 items-center justify-between w-full h-auto">
                  {/* Priority */}
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="priority"
                      className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
                    >
                      Priority
                    </label>
                    <input
                      type="number"
                      id="priority"
                      name="priority"
                      placeholder="Priority"
                      value={formData.priority}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
                    />
                  </div>

                  {/* Primary Color */}
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="primaryColor"
                      className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
                    >
                      Primary Color
                    </label>
                    <input
                      type="text"
                      id="primaryColor"
                      name="primaryColor"
                      placeholder="Primary Color"
                      value={formData.primaryColor}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
                    />
                  </div>

                  {/* Secondary Color */}
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="secondaryColor"
                      className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
                    >
                      Secondary Color
                    </label>
                    <input
                      type="text"
                      id="secondaryColor"
                      name="secondaryColor"
                      placeholder="Secondary Color"
                      value={formData.secondaryColor}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="readTime"
                      className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
                    >
                      Read Time
                    </label>
                    <input
                      type="number"
                      id="readTime"
                      name="readTime"
                      placeholder="Read Time (minutes)"
                      value={formData.readTime}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
                    />
                  </div>

                  {/* Category */}
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="category"
                      className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      placeholder="Category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
                    />
                  </div>
                </div>
                <div className="gap-3 flex flex-row w-full">
                  {formData.tags.map((tag, index) => (
                    <div key={index} className="w-full flex flex-col  ">
                      <label
                        htmlFor={`tag${index + 1}`}
                        className="text-lg font-semibold"
                      >
                        Tag {index + 1}
                      </label>
                      <input
                        type="text"
                        id={`tag${index + 1}`}
                        name={`tag${index + 1}`}
                        value={tag}
                        onChange={(e) => handleTagChange(index, e.target.value)}
                        required
                        className="p-2 border rounded-md"
                        placeholder={`Enter tag ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>

                {formData.title && formData.title.length > 10 && (
                  <button
                    onClick={() => {
                      setIsFeatureButtonClick(true);
                    }}
                    className="w-full text-center max-w-[300px] py-2 px-4 rounded-lg text-zinc-50 font-bold text-lg mt-3 bg-p1"
                  >
                    Image Uploader
                  </button>
                )}

                {isFeatureButtonClick && (
                  <ImageUploader title={formData.title} />
                )}
              </div>

              <div className="flex flex-row gap-3 items-center justify-between w-full h-auto">
                <div className="flex flex-col  w-full">
                  <label
                    htmlFor="featureImage"
                    className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
                  >
                    Feature Image Link
                  </label>
                  <input
                    type="text"
                    id="featureImage"
                    name="featureImage"
                    placeholder="Feature Image Link "
                    value={formData.featureImage}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    required
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label
                    htmlFor="featureAlt"
                    className="block text-xl font-bold text-gray-800 dark:text-zinc-200"
                  >
                    Feature Image Alt
                  </label>
                  <input
                    type="text"
                    id="featureAlt"
                    name="featureAlt"
                    placeholder="Feature Image Alt"
                    value={formData.featureAlt}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
                  />
                </div>
              </div>

              <SectionAdder
                title={formData.title}
                setBlocks={setBlocks}
                blocks={blocks}
                articleFacility={formData.articleFacility}
                setArticleFacility={handleArticleFacility}
              />
              <BlogContent
                blogData={{
                  blogTitle: formData.title,
                  blogExcerpt: formData.excerpt,
                  readTime: formData.readTime,
                  slug: formData.slug,
                  primaryColor: formData.primaryColor,
                  secondaryColor: formData.secondaryColor,
                  priority: formData.priority,
                  blogFeatureImage: formData.featureImage,
                  blogFeatureAlt: formData.featureAlt,
                  category: formData.category,
                  articleFacility: formData.articleFacility,
                  blogBody: {
                    tags: formData.tags,
                    blocks: blocks,
                  },
                }}
              />

              <button onClick={uploadArticle}>Upload the Article</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
