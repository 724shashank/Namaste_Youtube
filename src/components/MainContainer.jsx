import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <>
      <div className="sticky top-0 z-10 bg-white m-1 ">
        <ButtonList />
      </div>
      <div className="">
        <VideoContainer />
      </div>
    </>
  );
};

export default MainContainer;
