import React from "react";
import LeftBar from "../SideBars/LeftBar";
import Posts from "../Posts/";
import UsersRightBar from "../SideBars/UserRightBar";

function Feed() {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row w-full lg:w-[65rem] gap-10 container mx-auto mt-10 px-5">
      <LeftBar />
      <Posts />
      <UsersRightBar />
    </div>
  );
}

export default Feed;
