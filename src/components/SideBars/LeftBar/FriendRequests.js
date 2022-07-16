function FriendRequests() {
  return (
    <div className="bg-slate-700 p-2 text-white rounded-md">
      <h4 className="border-b pb-2">Friend Requests</h4>
      <div className="flex items-center cursor-pointer border-b border-gray-500 pb-2 pt-3">
        <img
          src="https://ferdslist.org/wp-content/uploads/2021/08/TC-profile-500x500.jpg"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4>Ahmed</h4>
          <span className="text-xs text-gray-400">10 Hours Ago</span>
        </div>
      </div>
      <div className="flex items-center cursor-pointer border-b border-gray-500 pb-2 pt-3">
        <img
          src="https://indianewengland.com/wp-content/uploads/2015/12/Sundar-Pichai-e1482896983828.jpg"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4>Sundar Pichai</h4>
          <span className="text-xs text-gray-400">3 Days Ago</span>
        </div>
      </div>
    </div>
  );
}

export default FriendRequests;
