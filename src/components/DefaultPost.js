import React from "react";
import { Link } from "react-router-dom";

const DefaultPost = ({ title, description, linkValue }) => {
  return (
    <div className="mb-4 card">
      <div className="card-body">
        <h5 className="text-dark card-title">{title}</h5>
        <p className="text-secondary card-text">{description}</p>
        {linkValue && (
          <Link className="btn btn-primary" to={linkValue}>
            See More
          </Link>
        )}
      </div>
    </div>
  );
};

export default DefaultPost;
