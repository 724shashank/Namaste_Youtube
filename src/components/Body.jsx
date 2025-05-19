import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
const Body = () => {
  const status = useSelector((store) => store?.menuStatus?.status);
  return (
    <>
    <div className="flex h-160">
      <div className="">
        {status && <SideBar />}
        </div>
        <div className="overflow-y-auto no-scrollbar">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
