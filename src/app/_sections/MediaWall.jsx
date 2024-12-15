"use client";
import { ChevronDown, HeartIcon } from "lucide-react";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { useBreakpoint } from "../_components/useBreakpoint";

const Media = (props) => {
  const post = props.post;
  if (post.type === "image")
    return (
      <div
        name="Media"
        className="w-full h-auto relative rounded-lg  overflow-hidden"
      >
        <Image
          src={post.mediaImage}
          alt={`${post.username} Post`}
          width={1000}
          height={600}
        />
      </div>
    );
  else if (post.type === "video") {
    return (
      <div className="w-full h-auto rounded-lg overflow-hidden">
        <video className="w-full h-auto" controls autoPlay muted loop>
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  } else if (post.type === "mini-article") {
    return (
      <div
        name="Media"
        className="w-full h-auto flex items-center justify-center relative rounded-lg  overflow-hidden"
      >
        <div className="flex flex-col gap-3 items-center justify-center py-10 bg-gradient-to-b from-gray-950 to-purple-950/50 p-5 rounded-lg">
          <div className="flex flex-col ml-3 items-center justify-center">
            <div className="w-[50px] h-[50px] rounded-full relative bg-[#616161] overflow-hidden">
              <Image
                src={post.userImage}
                alt={`${post.username} Avatar`}
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-sm  text-zinc-200 big-winks-text font-bold">
                Muhammad Anique
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-5 px-3 py-2 items-center justify-center">
            <h1 className="font-manrope text-md font-bold text-center px-4">
              Fine-Tuning: Enhancing AI Models for Specific Tasks
            </h1>
            <p className=" text-sm  text-zinc-300 text-center">
              Fine-tuning is the process of taking a pre-trained machine
              learning model and adjusting it to perform a specific task or
              function more effectively. By using a smaller, task-specific
              dataset, the model can adapt its weights and biases to better
              understand the nuances of the new data.
            </p>

            <div
              name="Media"
              className="w-full items-center justify-center flex mt-5 h-auto rounded-lg overflow-hidden relative"
            >
              <Image
                src="/endline2.png"
                alt={`${post.username} Post`}
                width={180}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (post.type === "link") {
    return (
      <div
        name="Media"
        className="w-full h-auto flex items-center justify-center relative rounded-lg  overflow-hidden"
      >
        <div className="flex  flex-col gap-3 items-center justify-center pt-6    rounded-lg">
          <div className="flex flex-col ml-3 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl   text-zinc-200 -rotate-6 font-manrope">
                {" "}
                <span className="big-winks-text">E</span>xplor
                <span className="big-winks-text">e</span>{" "}
                <span className="font-manrope  font-extrabold">{"  "}Blog</span>
              </h1>
            </div>
          </div>
          <h1 className=" -rotate-[10deg] hover:rotate-3 duration-300 cursor-pointer ease-in-out hover:translate-y-0  shadow-lg rounded-lg py-4 text-lg tracking-widest px-6  bg-gradient-to-r translate-y-5 backdrop-blur-md from-[#000000be] to-[#00000054] big-winks-text text-center z-30 max-w-[300px]">
            Fine Tuning Enhancing AI Models for Specific Tasks
          </h1>

          <div
            name="Media"
            className="w-full h-auto rounded-lg overflow-hidden relative"
          >
            <Image
              src={post.mediaImage}
              alt={`${post.username} Post`}
              width={1000}
              height={600}
            />
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div
        name="Media"
        className="w-full h-auto flex items-center justify-center relative rounded-lg  overflow-hidden"
      >
        <div className="w-full h-full absolute z-20 bg-gradient-to-b from-[#000000f6] to-[#000000d9]"></div>
        <Image
          src="/l1.jpg"
          alt={`Post`}
          width={1000}
          className="z-10"
          height={600}
        />
        <h1 className="font-manrope font-bold text-center px-10 absolute z-30">
          {'"'}Programming Like Fun Do it ro not it is indeed{'"'}
        </h1>
      </div>
    );
};

const useBalancedColumns = (posts, numCols) => {
  // Use useMemo to calculate balanced columns only when dependencies change
  return useMemo(() => {
    console.log("Recalculating balanced columns...");
    return distributePosts(posts, numCols);
  }, [posts, numCols]);
};

// Utility function to distribute posts into balanced columns
const distributePosts = (posts, numCols) => {
  const columns = Array.from({ length: numCols }, () => []);
  const columnHeights = Array(numCols).fill(0);

  posts.forEach((post) => {
    const shortestColumnIndex = columnHeights.indexOf(
      Math.min(...columnHeights)
    );
    columns[shortestColumnIndex].push(post);
    columnHeights[shortestColumnIndex] += post.size || 1;
  });

  return columns;
};

const MediaWall = () => {
  const [exploreCliked, setExploreCliked] = useState(false);

  const posts = [
    {
      id: 4,
      username: "Muhammad Anique",
      handle: "@anique_",
      platform: "linked-in",
      userImage: "/Muhammad-Anique.avif",
      mediaImage: "/anique2.jpeg",
      type: "image",
      size: 3,
    },
    {
      id: 8,
      username: "Muhammad Anique",
      handle: "@anique_",
      platform: "medium",
      userImage: "/Muhammad-Anique.avif",
      mediaImage: "/anique2.jpeg",
      type: "mini-article",
      size: 3,
    },
    {
      id: 5,
      username: "Muhammad Anique",
      handle: "@anique_",
      platform: "github",
      userImage: "/Muhammad-Anique.avif",
      mediaImage: "/anique2.jpeg",
      type: "link",
      size: 1,
    },
    // {
    //   id: 1,
    //   username: "Muhammad Anique",
    //   handle: "@anique_",
    //   platform: "my-web",
    //   userImage: "/Muhammad-Anique.avif",
    //   mediaImage: "/anique3.jpeg",
    //   type: "image",
    //   size: 4,
    // },
    {
      id: 2,
      username: "John Doe",
      handle: "@johndoe",
      userImage: "/Muhammad-Anique.avif",
      platform: "snapchat",
      mediaImage: "/anique1.jpeg",
      type: "image",
      size: 1,
    },
    {
      id: 7,
      username: "Muhammad Anique",
      handle: "@anique_",
      platform: "medium",
      userImage: "/Muhammad-Anique.avif",
      mediaImage: "/anique2.jpeg",
      type: "quote",
      size: 1,
    },
    {
      id: 3,
      username: "Jane Smith",
      handle: "@janesmith",
      platform: "instagram",
      userImage: "/Muhammad-Anique.avif",
      mediaImage: "/anique4.jpeg",
      type: "image",
      size: 3,
    },
    {
      id: 6,
      username: "Muhammad Anique",
      handle: "@anique_",
      platform: "medium",
      userImage: "/Muhammad-Anique.avif",
      mediaImage: "/anique2.jpeg",
      type: "quote",
      size: 1,
    },

    {
      id: 9,
      username: "Muhammad Anique",
      handle: "@anique_",
      platform: "medium",
      userImage: "/Muhammad-Anique.avif",
      mediaImage: "/orange-bg.jpg",
      type: "link",
      size: 1,
    },
  ];

  const returnCols = (breakpoint) => {
    if (breakpoint === "sm" || breakpoint == "xs") return 1;
    else if (breakpoint === "md") return 2;
    else return 3;
  };
  const breakpoint = useBreakpoint();
  const columns = useBalancedColumns(posts, returnCols(breakpoint));

  console.log(breakpoint, returnCols());

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="relative py-32  max-w-[1250px] flex justify-center">
        <div
          className={`absolute z-[60] py-10 px-5 scale-75 md:scale-100 ${
            exploreCliked
              ? " -translate-y-48"
              : "backdrop-blur-lg rounded-xl -translate-y-32 w-[400px] h-auto shadow-3xl -rotate-6  mt-12"
          } flex items-center justify-center flex-col duration-300 transition-transform ease-in-out`}
        >
          <h1 className="big-winks-text -rotate-6 text-6xl text-zinc-300 top-0 shadow-lg mt-4 ">
            Media Wall
          </h1>
          <p className="font-manrope text-center mt-3 text-2xl">
            <span className="big-winks-text font-bold">&nbsp;E</span>xplore
            &nbsp;
            <span className="big-winks-text font-bold text-p1 tracking-widest">
              the
            </span>{" "}
            <span className="big-winks-text font-bold">&nbsp;T</span>imeline 😎
          </p>
        </div>
        <div
          className={`w-full h-auto flex items-start justify-center flex-row ${
            exploreCliked ? "h-auto " : " max-h-[500px] overflow-hidden "
          } relative  gap-4`}
        >
          <div
            className={`${
              exploreCliked ? "hidden" : "flex"
            } w-full max-w-[1120px] rounded-lg   h-full bg-trasnparent from-black/25 to-black/90 absolute z-[50] flex items-end justify-center `}
          >
            <button
              onClick={() => {
                setExploreCliked(true);
              }}
              className="flex flex-row px-3 py-2 backdrop-blur-sm from-black/35 to-black/90 bg-gradient-to-r rounded-lg shadow-md items-center gap-4 justify-center mb-8 absolute bottom-0"
            >
              <h1 className="text-lg md:text-2xl big-winks-textp-2">
                Explore{" "}
              </h1>
              <ChevronDown className="w-7 h-7 text-zinc-200" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[82%] md:w-[75%] gap-3 justify-items-center align-items-center ">
            {columns.map((colPosts, index) => (
              <div key={index} className="flex flex-col gap-4 ">
                {colPosts.map((post) => (
                  <div key={post.id} className="relative">
                    <Post post={post} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaWall;

const Post = (props) => {
  const post = props.post;
  return (
    <div
      key={post.id}
      name="MediaSection"
      className="w-full max-w-[500px] bg-gradient-to-b p-2 rounded-lg from-[#25252545] to-[#25252545] h-auto flex flex-col gap-4"
    >
      {post.type !== "quote" &&
        post.type !== "mini-article" &&
        post.type !== "link" && <PostHeader post={post} />}
      <Media post={post} />
    </div>
  );
};

const PostHeader = (props) => {
  const post = props.post;
  return (
    <div
      name="Header"
      className="w-full h-[80px] flex flex-row rounded-tl-full justify-between items-center"
    >
      <div className="flex flex-row ml-3 items-center justify-center">
        <div className="w-[50px] h-[50px] rounded-full relative bg-[#616161] overflow-hidden">
          <Image
            src={post.userImage}
            alt={`${post.username} Avatar`}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col ml-3">
          <h1 className="text-sm  text-zinc-300">{post.handle}</h1>
          <p className="text-xs text-zinc-500 ">6/05/2024</p>
        </div>
      </div>
      <div>
        <HeartIcon className="w-5 h-5 text-zinc-400 mr-3" />
      </div>
    </div>
  );
};
