function NewPost() {
  return (
    <div className="bg-gray-900 rounded-2xl text-white p-3 mb-10">
      <div className="flex h-40 border-b border-gray-500">
        <img
          src="https://africaprime.com/wp-content/uploads/2020/04/ElonMusk.jpg"
          className="rounded-full w-14 h-14 cursor-pointer"
        />
        <textarea
          placeholder="What's in your mind?"
          className="bg-transparent border-none focus:ring-0 ml-5 w-full resize-none"
        />
      </div>
      <div className="flex justify-around items-center mx-auto mt-3">
        <div className="transition duration-150 cursor-pointer hover:bg-gray-700 p-2 rounded-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Emojione_1F602.svg/800px-Emojione_1F602.svg.png"
            className="w-10 h-10"
          />
        </div>
        <div className="transition duration-150 cursor-pointer hover:bg-gray-700 p-2 rounded-xl">
          <img
            src="https://img.icons8.com/color/480/image-gallery.png"
            className="w-10 h-10"
          />
        </div>
        <div className="transition duration-150 cursor-pointer hover:bg-gray-700 p-2 rounded-xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3655/3655135.png"
            className="w-10 h-10"
          />
        </div>
        <div>
          <button className="w-40 transition duration-200 bg-blue-600 hover:bg-blue-500 rounded-md p-3">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
