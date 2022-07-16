import React, { useEffect, useState } from "react";
import axios from "axios";

function UsersRightBar() {
  const [users, setUsers] = useState([
    {
      avatar:
        "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
    },
    {
      avatar:
        "https://pbs.twimg.com/profile_images/436814414822768640/JuIbwyrY_400x400.jpeg",
    },
    {
      avatar:
        "https://www.crn.com/resources/0249-0a9f76b3fa01-fec58329da14-1000/bezos-jeff-amazon400.jpg",
    },
    {
      avatar:
        "https://bolavip.com/__export/1657143783358/sites/bolavip/img/2022/07/06/lionel_messi_argentina_2022.jpg_1216690859.jpg",
    },
    {
      avatar:
        "https://64.media.tumblr.com/bc757e175e74442ccdcb9a77a8b3b19d/9e6565f10babb60a-af/s400x600/6b2d14595a484c3e8b10de119bd58f1c7de480f3.png",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  ]);

  return (
    <div className="hidden lg:block lg:fixed right-5 h-[30rem] md:w-40 bg-gray-900 rounded-2xl">
      {users.map((user, index) => {
        return (
          <img
            key={index}
            src={user.avatar}
            className="w-14 my-4 cursor-pointer mx-auto rounded-full"
          />
        );
      })}
    </div>
  );
}

export default UsersRightBar;
