import getTimeAgo from "../utils/getTimeAgo";
import formatNumber from "../utils/formatNumber";
const VideoCard = ({ details, views }) => {
  const { thumbnails, title, channelTitle, publishedAt } = details;

  
  return (
    <>
      <div className="w-85 p-5 m-1 shadow-xl">
        <img
          className="rounded-xl"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
        <p className="font-bold">{title.length >30 ? title.slice(0,30)+"..." :title}</p>
        <p className="text-[#606060]">{channelTitle}</p>
        <p className="text-[#606060]">
          {formatNumber(views.viewCount)}&nbsp;views&nbsp;▪&nbsp;
          {getTimeAgo(publishedAt)}
        </p>
      </div>
    </>
  );
};

export default VideoCard;
