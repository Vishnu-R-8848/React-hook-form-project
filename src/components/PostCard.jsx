import React, { useState } from "react";
import {
  RiHeart3Line,
  RiChat4Fill,
  RiTelegram2Fill,
  RiBookmarkLine,
  RiEdit2Line,
  RiDeleteBin5Line,
} from "@remixicon/react";

const PostCard = ({ data, setDemo }) => {
  const [options, setOptions] = useState(false);
  const [overlay, setOverlay] = useState("flex");

  return (
    <div
      onDoubleClick={() => {
        console.log(data.likes);
        let newCount = Number(data.likes) + 1;
        setDemo((prev) => {
          prev.map((item) => {
            if (item.id === data.id) {
              item.likes = newCount;
            }
          });
          return prev.map((item) => {
            return item;
          });
        });
      }}
      id={data.id}
      className="post-card min-h-150- max-h-200 h-full w-full px-2 py-3 bg-[#FFFFFF] rounded-lg flex flex-col gap-2"
    >
      <div className="user-card-details-wrapper flex items-center justify-between gap-2 relative">
        <div className="user-card-details-container flex justify-between gap-2 ">
          <figure className="user-card-profile-img-wrapper h-10 w-10 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={data.profileImg}
              alt={data.username}
            />
          </figure>
          <div className="user-card-text-details flex flex-col items-center ">
            <h2 className="user-id text-md">{data.username}</h2>
            <p className="user-post-location text-xs capitalize">
              {data.location}
            </p>
          </div>
        </div>
        <div
          className="card-cta-btn-container cursor-pointer flex gap-1 h-full "
          onClick={() => setOptions((prev) => !prev)}
        >
          {/* <div className="red bg-red-500 h-3 w-3 rounded-full"></div>
          <div className="red bg-yellow-500 h-3 w-3 rounded-full"></div>
          <div className="red bg-green-500 h-3 w-3 rounded-full"></div> */}
          <div className="red bg-black/52 h-1 w-1 rounded-full"></div>
          <div className="red bg-black/52 h-1 w-1 rounded-full"></div>
          <div className="red bg-black/52 h-1 w-1 rounded-full"></div>
        </div>
        {options ? (
          <div className="display-card-options flex flex-col gap-2 capitalize bg-gray-100 h-fit w-[150px] p-1 rounded-lg absolute right-0 top-0">
            <button
              className="capitalize text-xl cursor-pointer flex gap-1 justify-around  rounded-md"
              onClick={() => setOptions((prev) => !prev)}
            >
              X
            </button>
            <button className="capitalize text-xl cursor-pointer flex gap-1 justify-around  rounded-md">
              <RiEdit2Line /> edit
            </button>
            <button
              className="capitalize text-xl cursor-pointer flex gap-1 justify-around  rounded-md"
              onClick={() => {
                setDemo((prev) => prev.filter((item) => item.id !== data.id));
              }}
            >
              <RiDeleteBin5Line /> delete
            </button>
          </div>
        ) : (
          false
        )}
      </div>
      <div className="post-card-media-container h-[70%] w-fll p-1 rounded-lg ">
        <figure className="h-full w-full rounded-lg overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            src={data.postImg}
            alt={data.username}
          />
        </figure>
      </div>
      <div className="user-card-cation-wrapper">
        <div className="post-card-cta-icons-wrapper flex items-center justify-between">
          <div className="post-analytics-icons-wrapper flex gap-2">
            <button
              id="like-btn"
              className="cta post-btn analytics-btn flex items-center gap-0.5 rounded-lg"
            >
              <RiHeart3Line />{" "}
              <span className="counts-number text-xs">{data.likes}</span>
            </button>
            <button
              id="comments-btn"
              className="cta post-btn analytics-btn flex items-center gap-0.5 rounded-lg"
            >
              <RiChat4Fill />{" "}
              <span className="counts-number text-xs">{data.comments}</span>
            </button>
            <button
              id="share-btn"
              className="cta post-btn analytics-btn flex items-center gap-0.5  rounded-lg"
            >
              <RiTelegram2Fill />{" "}
              <span className="counts-number text-xs">{data.shares}</span>
            </button>
          </div>
          <div className="post-save-icon-wrapper">
            <button
              id="save-btn"
              className="cta post-btn analytics-btn p-0 5 rounded-lg"
            >
              <RiBookmarkLine />
            </button>
          </div>
        </div>
        <p className="caption-text-wrapper font-semibold text-sm p-1 ">
          {" "}
          {data.username}
          <span className="caption-text font-light ml-1.5">{data.caption}</span>
        </p>
        <div className="hash-tags-wrapper uppercase">
          {data.tags.map((tag, _idx) => {
            return (
              <span
                key={_idx}
                className="hash-tag-text p-2 text-xs bg-gray-400 text-white rounded-2xl"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
