import { useState } from "react";

import Loader from "../Loader";

const useLoader = cb => {
  const [isLoading, setIsLoading] = useState(false);

  const compWithLoader = () => {
    if (!isLoading) {
      return <Loader />;
    }

    return cb();
  };

  return { setIsLoading, compWithLoader };
};

export default useLoader;
