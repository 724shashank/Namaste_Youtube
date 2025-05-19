import { YT_Search_Result } from "../utils/constants";
import { addVideos } from "../redux/slices/videoSlice";
import { useDispatch } from "react-redux";


const SearchResults = ({ results }) => {
   const dispatch =useDispatch();

  const fetchData = async (keyword) => {
    const data = await fetch(YT_Search_Result + encodeURIComponent(keyword));
    const response = await data.json();
    dispatch(addVideos(response.items));
  };

  return (
    <>
      <div className="fixed z-50 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.8)] w-[32%] h-auto mx-[33.5%] rounded-2xl -mt-5 ">
        <ul className="p-2">
          {results?.map((item, index) => (
            <li
              key={index}
              className="m-2 hover:bg-gray-100 px-1 cursor-pointer"
              onClick={() => fetchData(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </> 
  );
};

export default SearchResults;


