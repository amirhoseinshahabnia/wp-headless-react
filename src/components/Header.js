import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary text-white p-2">
      <h3 className="mb-0 text-center">
        <Link className="text-white" to="/">
          WordPress & React
        </Link>
      </h3>
    </div>
  );
};

export default Header;
