import hamburger from "../assets/hamburger.png";
import yt_logo from "../assets/yt_logo_rgb_light.png";
import user_logo from "../assets/user.png";
import search from "../assets/search.png";
import { useDispatch, useSelector } from "react-redux";
import { checkStatus } from "../redux/slices/menuSlice";
import { YT_Search_API } from "../utils/constants";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import { cacheData,removeOldCache } from "../redux/slices/searchSlice";
const Header = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [output, Setoutput] = useState("");
  const [suggestions, setSuggestion] = useState(false);
  const SearchedQuery = useSelector((store) => store?.search);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (SearchedQuery[query]) {
        Setoutput(SearchedQuery[query]);
      
      } else {
        handleSearch(query);
        if(Object.keys(SearchedQuery).length>=100)
          {
           dispatch(removeOldCache(30));  
            
          }
      }
     
    
    }, 100);

    
    

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const handleSearch = async (value) => {
    const response = await fetch(YT_Search_API + value);
    const data = await response.json();
    Setoutput(data[1]);
    dispatch(
      cacheData({
        [query]: data[1],
      })
    );
  };

  const toggleMenu = () => {
    dispatch(checkStatus());
  };

  return (
    <>
    
      <div className="grid grid-flow-col p-5 m-2 shadow-lg sticky top-0 bg-white z-50">
        <div className="flex col-span-1">
          <img
            className="w-5 h-7 cursor-pointer"
            src={hamburger}
            alt="menu"
            onClick={toggleMenu}
          />
          <img
            className="w-30 h-7 mx-5 object-contain"
            src={yt_logo}
            alt="youtube_logo"
          />
        </div>
       
        <div className="flex col-span-10 h-8 md:h-9.5 w-[70%] md:w-[50%] border-1  rounded-2xl bg-[#F2F2F2] hover:bg-[#E5E5E5] mx-[20%]">
          <input
            className="w-[100%] h-auto p-3 md:h-9 md:p-4 md:bg-white rounded-l-2xl "
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setSuggestion(true)}
            onBlur={() => setTimeout(()=>setSuggestion(false),200)}
            value={query}
          />

          <div className=" border-1 rounded-r-2xl">
            <img
              className=" h-6 md:h-9 md:mx-5 mx-2 mt-1 md:mt-0 cursor-pointer "
              src={search}
              alt="search_button"
            />
          </div>
        </div>
        <div className="flex-col justify-items-end-safe">
          <img
            className="col-span-1 h-7 object-contain "
            src={user_logo}
            alt="user_logo"
           
          />
        </div>
      </div>
      {suggestions && Array.isArray(output) && output.length > 0 && (
        <SearchResults results={output} />
      )}
      
    </>
  );
};

export default Header;
