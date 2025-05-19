import user from "../assets/user.png";
import like from "../assets/like.png"
import share from "../assets/share.png"
import download from "../assets/download.png"
import formatNumber from "../utils/formatNumber";

const ButtonStack = ({ details }) => {
  const { title, channelTitle } = details?.snippet || {};
  const { likeCount,viewCount } = details?.statistics || {};

  return (
    <div className="px-14 py-5">
      {/* Video Title */}
      <h1 className="text-xl font-semibold mb-5 w-255">{title}</h1>

      {/* Channel Info and Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-[70%] border-b pb-4">
        
        {/* Left side: Channel info */}
        <div className="flex items-center gap-4">
          <img className="w-10 h-10 rounded-full" src={user} alt="channel" />
          <div className="flex flex-col">
            <p className="font-semibold">{channelTitle}</p>
            <p className="text-gray-600 text-sm">{formatNumber(viewCount)} subscribers</p> 
          </div>
          <button className="ml-5 bg-black text-white font-semibold px-4 py-2 rounded-full hover:opacity-90">
            Subscribe
          </button>
        </div>

        {/* Right side: Like, Dislike, Share, Download */}
        <div className="flex items-center gap-3 mt-5 md:mt-0">
          <div className="flex items-center bg-gray-200 rounded-full overflow-hidden font-semibold">
            <button className="px-4 py-2 flex items-center gap-1 hover:bg-gray-300">
              <img className="w-5" src={like} alt="like"/> {formatNumber(likeCount)}
            </button>
            <div className="border-r border-gray-400 h-6"></div>
            <button className="px-4 py-2 hover:bg-gray-300">
            <img className="w-5 transform rotate-180" src={like} alt="like"/>
            </button>
          </div>

          <button className=" flex bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 font-semibold">
          <img className="w-4 object-contain mr-2" src={share} alt="share"/>Share
          </button>
          <button className="flex bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 font-semibold">
          <img className="w-6  object-contain " src={download} alt="share"/>Download
          </button>
          <button className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 font-semibold">
            ⋯
          </button>
        </div>

      </div>
    </div>
  );
};

export default ButtonStack;
