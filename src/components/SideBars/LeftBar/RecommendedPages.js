function RecommendedPages() {
  return (
    <div className="bg-slate-700 mt-10 p-2 text-white rounded-md">
      <h4 className="border-b border-gray-500 pb-2">Recommended Pages</h4>
      <div className="flex items-center cursor-pointer border-b border-gray-500 mt-3 pb-3">
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1513321478077/ByCWNxZMf.png"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4>React Community</h4>
          <span className="text-xs text-gray-400 break-all">
            React Developers Community
          </span>
        </div>
      </div>
      <div className="flex items-center cursor-pointer border-b border-gray-500 mt-3 pb-3">
        <img
          src="https://scand.com/wp-content/uploads/2021/04/Angular.jpg"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4>Angular Community</h4>
          <span className="text-xs text-gray-400 break-all">
            Angular Developers Community
          </span>
        </div>
      </div>
      <div className="flex items-center cursor-pointer border-b border-gray-500 mt-3 pb-3">
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1607082692624/UUKTw2qEE.png"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4>Svelte Community</h4>
          <span className="text-xs text-gray-400 break-all">
            Svelte Developers Community
          </span>
        </div>
      </div>
      <div className="flex items-center cursor-pointer border-b border-gray-500 mt-3 pb-3">
        <img
          src="https://www.typescripttutorial.net/wp-content/uploads/2020/04/favicon.png"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4>TypeScript Community</h4>
          <span className="text-xs text-gray-400 break-all">
            TypeScript Developers Community
          </span>
        </div>
      </div>
      <div className="flex items-center cursor-pointer border-b border-gray-500 mt-3 pb-3">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5aeb78ff36099b2ee08bd6c1/1612966604946-H1CJBX2S2DUXCYGSGRNN/javascript-736400_1280.png?format=500w"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4>JavaScript Community</h4>
          <span className="text-xs text-gray-400 break-all">
            JavaScript Developers Community
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecommendedPages;
