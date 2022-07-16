import { useState, useEffect } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import { posts } from "../../data/posts";

function Posts() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    setListOfPosts(posts);
  }, []);

  return (
    <div className="md:w-full lg:w-[26rem]">
      <NewPost />
      {listOfPosts.map((post, index) => {
        return (
          <Post
            key={index}
            username={post.username}
            avatar={post.avatar}
            date={post.date}
            body={post.body}
            image={post.image}
            likes={post.likes}
            comments={post.comments}
          />
        );
      })}
    </div>
  );
}

export default Posts;
