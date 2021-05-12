import "./App.css";

import axios from "axios";
import { useState, useEffect } from "react";

import PostsComp from "./Components/Posts";

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const responsePosts = res.data;
      setPosts(responsePosts);
    });
  }, []);
  return (
    <div className="App">
      <p className="name">The posts are going to show up here</p>
      {posts && (
        <div className="postsContainer">
          {posts.map((post) => (
            <PostsComp
              Title={post.title}
              Body={post.body}
              Id={post.id}
              UserId={post.userId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
