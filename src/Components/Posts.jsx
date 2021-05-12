import React from "react";

const Posts = ({ Title, Body, Id, UserId }) => {
  return (
    <div className="posts">
      <p className="posts__Title">{Title}</p>
      <p className="posts__body">{Body}</p>
      <p className="posts__Id">
        Id:{Id} and the UserId:{UserId}
      </p>
    </div>
  );
};

export default Posts;

Posts.defaultProps = {
  Title: "Sample Title",
  Body: "lorem ipsum",
  Id: 1,
  UserId: 1,
};
