import { Link } from "react-router";
import useGetVideos from "../customHooks/useGetVideos";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const searchedData = useSelector((store) => store?.videoData);
  const data = useGetVideos();

  return (
    <>
      <div className="flex flex-wrap justify-evenly shadow-2xl">
        {(searchedData.length > 0 ? searchedData : data?.items)?.map((item) => (
          <Link
            key={item.id?.videoId || item.id}
            to={"/watch?v=" + (item.id?.videoId || item.id)}
          >
            <VideoCard details={item.snippet} views={item.statistics || {}} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
