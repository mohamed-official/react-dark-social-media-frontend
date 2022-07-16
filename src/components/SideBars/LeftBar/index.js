import React from "react";
import FriendRequests from "./FriendRequests";
import RecommendedPages from "./RecommendedPages";

function LeftBar() {
  return (
    <div className="p-5 h-fit bg-gray-900 rounded-2xl mb-10">
      <FriendRequests />
      <RecommendedPages />
    </div>
  );
}

export default LeftBar;
