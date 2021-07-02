import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalVideo from "react-modal-video";

import PostItemWithVideo from "./PostItemWithVideo";
import DefaultPost from "./DefaultPost";
// import Loader from "./Loader";

import useLoader from "./hooks/useLoader";

const PostList = () => {
  const [posts, setPosts] = useState();
  const [id, setId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const renderList = () => {
    if (posts) {
      return posts.map((post, index) => {
        if (post.acf.cta === "NO") {
          return (
            <DefaultPost
              title={post.acf.title}
              description={post.acf.description}
              key={post.id}
            />
          );
        }
        if (post.acf.cta_type === "internalLinks") {
          return (
            <DefaultPost
              title={post.acf.title}
              description={post.acf.description}
              linkValue={post.acf.page_link}
              key={post.id}
            />
          );
        }
        return (
          <PostItemWithVideo
            key={post.id}
            title={post.acf.title}
            description={post.acf.description}
            videoId={post.acf.video_id}
            openModal={openModal}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setId={setId}
          />
        );
      });
    }
  };

  const { setIsLoading, compWithLoader } = useLoader(renderList);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios({
          method: "GET",
          url:
            "https://dev-slate-audio.pantheonsite.io/wp-json/wp/v2/home-sections"
        });
        setPosts(res.data);
        setIsLoading(true);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [setIsLoading]);

  return (
    <>
      <h1 className="mb-5 text-dark">Sections List</h1>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={id}
        onClose={() => setIsOpen(false)}
      />
      {compWithLoader()}
    </>
  );
};

export default PostList;
