import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";

function Post({ username, avatar, date, body, image, likes, comments }) {
  const [liked, setLiked] = useState(true);

  return (
    <div className="bg-gray-900 rounded-2xl text-white p-3 mb-10">
      <div className="flex items-center pb-5">
        <img src={avatar} className="rounded-full w-14 h-14 cursor-pointer" />
        <div className="ml-5">
          <h4>{username}</h4>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
      </div>
      <div className="mt-5 pb-5 border-b border-gray-500">{body}</div>
      <div className="mt-5 ">
        <img
          src={image}
          className="max-w-full h-auto mx-auto block rounded-xl cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-around w-full mt-5">
        <div className="flex cursor-pointer">
          {liked ? (
            <FaHeart
              size={30}
              className="text-red-600"
              onClick={() => setLiked(!liked)}
            />
          ) : (
            <FaRegHeart size={30} onClick={() => setLiked(!liked)} />
          )}
          <span className="text-lg ml-3">{likes}</span>
        </div>
        <div className="flex cursor-pointer">
          <AiOutlineComment size={30} className="text-gray-400" />
          <span className="text-lg text-gray-400 ml-3">{likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
