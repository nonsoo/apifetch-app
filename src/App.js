import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

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
        <div className="posts">
          {posts.map((post) => (
            <p>the is the title of the post: {post.title}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
