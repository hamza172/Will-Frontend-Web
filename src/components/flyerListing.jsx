import React, { useEffect, useState } from "react";

import posts from "../common/posts";
import postLoading from "../common/postLoading";

const FlyerListing = ({user}) => {
  const PostLoading = postLoading(posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiURL = process.env.REACT_APP_API_URL + "/flyer/";

    fetch(apiURL)
      .then((data) => data.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);
  
  return (
    <div>
      <PostLoading isLoading={appState.loading} posts={appState.posts} user={user} />
    </div>
  );
};
export default FlyerListing;
