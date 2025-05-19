import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/slices/menuSlice";
import CommentList from "./CommentList";
import { useSearchParams } from "react-router";
import { comments } from "../utils/constants";
import ButtonStack from "./ButtonStack";
import useGetVideos from "../customHooks/useGetVideos";
import { useSelector } from "react-redux";
import Livechat  from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((store)=>store.videoData);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const data = useGetVideos();
  const metaData = (searchQuery.length > 0 ?searchQuery: data?.items)?.find((meta) => (meta.id.videoId || meta.id) === id);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
     
      <div className="w-full flex">
       <div className="" >
          <iframe
            className="mx-14 m-5 w-70 h-50 md:w-250 md:h-150"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
            allowFullScreen
          ></iframe>
          </div>
      <div className="w-110 h-150 m-5 -ml-10">
        <Livechat />
        </div>
        </div>
        <ButtonStack details={metaData} />
        <div>
          <CommentList data={comments} />
        </div>
   
    </>
  );
};
export default WatchPage;
