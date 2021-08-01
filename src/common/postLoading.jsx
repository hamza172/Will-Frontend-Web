import React from "react";

function PostLoading(Component) {
  return function PostLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div class="row">
        <div class="col-md-12">We are waiting for the data to load!!</div>
      </div>
    );
  };
}

export default PostLoading;
