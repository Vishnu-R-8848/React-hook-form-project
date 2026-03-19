import React from "react";
import { RiCameraAiFill, RiUpload2Fill } from "@remixicon/react";
import { useForm } from "react-hook-form";

const Form = ({ setOption, setDemo, setToggleForm, demo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let handleFormSubmit = (data) => {
    console.log(data);
    console.log(Object.keys(data));

    const profileFile = data.img[0]; 
    const mediaFile = data.media_img[0];

    const profileUrl = profileFile ? URL.createObjectURL(profileFile) : "";
    const mediaUrl = mediaFile ? URL.createObjectURL(mediaFile) : "";

     let newData = {
      id: demo.length + 1,
      username: data.username,
      profileImg: profileUrl, 
      location: data.location,
      postImg: mediaUrl, 
      likes: 0,
      comments: 0,
      shares: 0,
      caption: data.caption,
      tags: ["#minimal", "#tech"],
    };

    console.log(newData);
    setDemo((prev) => [newData, ...prev]);
    setToggleForm((prev) => !prev);
    reset();
  };

  return (
    <div className=" max-w-xs w-full h-full p-3 flex flex-col gap-5  rounded-xl">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="w-full h-full flex flex-col items-center gap-5 rounded-md"
      >
        <div className="form-post-submission-wrapper flex justify-between items-center w-full">
          <button
            className="text-xl cursor-pointer"
            onClick={() => setOption((prev) => !prev)}
          >
            {" "}
            X{" "}
          </button>
          <p className="form-intro-text text-2xl font-semibold">New Post</p>
          <button className="text-xl bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-md text-white">
            Share
          </button>
        </div>
        <div
          onClick={() => {
            let img = document.getElementById("img");
            img.click();
          }}
          className="image-input-wrapper w-20 h-20  bg-blue-100 rounded-full flex flex-col items-center justify-center   "
        >
          <div className="icon-wrapper p-3 rounded-full h-15 w-15 bg-blue-200 flex items-center justify-center">
            <RiCameraAiFill />
          </div>
          <input
            {...register("img", { required: "Image is required" })}
            type="file"
            name="img"
            hidden
            id="img"
          />
        </div>

        <div
          className="media-post-input-wrapper w-full 
         aspect-square bg-blue-100 rounded-md flex flex-col items-center justify-center   "
          onClick={() => {
            let media_img = document.getElementById("media_img");
            media_img.click();
          }}
        >
          <div className="icon-wrapper p-3 rounded-full h-15 w-15 bg-blue-200 flex items-center justify-center">
            <RiUpload2Fill />
          </div>
          <p className="text-2xl">Upload Media Image</p>
          <input
            {...register("media_img", { required: "Media Image is required" })}
            type="file"
            name="media_img"
            hidden
            id="media_img"
          />
        </div>
        <div className="username-input-wrapper w-full">
          <input
            className="h-full w-full p-2 text-2xl outline-0 rounded-md border focus:border-green-400"
            {...register("username", { required: "username is required" })}
            placeholder="Jhon doe"
            type="username"
            name="username"
            id="username"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <select
          {...register("location", { required: "location is required" })}
          name="hashtags"
          id="hashtags"
          className="w-full outline-0 p-3 border focus:border-green-400 rounded-md"
        >
          <option value="location" disabled>
            location
          </option>
          <option value="bengalure, india">bengalure, india</option>
          <option value="tokyo, japan">tokyo, japan</option>
          <option value="bhopal, india">bhopal, india</option>
        </select>
        <textarea
          {...register("caption", { required: "caption is required" })}
          placeholder="Write a caption..."
          className="w-full p-3 outline-0 rounded-md border focus:border-green-400"
          name="caption"
          id="caption"
          cols={5}
          rows={5}
        ></textarea>
      </form>
    </div>
  );
};

export default Form;
