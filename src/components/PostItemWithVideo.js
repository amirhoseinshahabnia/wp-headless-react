import React from "react";

const PostItemWithVideo = ({
  title,
  description,
  videoId,
  isOpen,
  setIsOpen,
  openModal,
  setId
}) => {
  return (
    <div className="mb-4 card">
      <div className="card-body">
        <h5 className="text-dark card-title">{title}</h5>
        <p className="text-secondary card-text">{description}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            openModal();
            setId(videoId);
          }}
        >
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default PostItemWithVideo;
