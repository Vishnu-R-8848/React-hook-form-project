import React from "react";

const StoryCards = ({ data }) => {
  return (
    <div className="user-story-card-wrapper h-full w-full flex flex-col items-center justify-center">
      <div className="user-story-card p-1 border-3 border-gray-500 w-fit rounded-full">
        <figure className="user-profile-img-wrapper h-15 w-15 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={data.profileImg}
            alt={data.username}
          />
        </figure>
      </div>
      <h2 className="user-id text-xs">{data.username}</h2>
    </div>
  );
};

export default StoryCards;
