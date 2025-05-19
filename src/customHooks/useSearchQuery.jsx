import { useEffect, useState } from "react";
import { YT_Search_Result } from "../utils/constants";
const useSearchQuery = ({props}) => {
    const {keyword} = props
  const [data, setData] = useState("");
  const fetchData = async () => {
    const query = {keyword};
    const data = await fetch(YT_Search_Result + encodeURIComponent(query));
    const response = await data.json();
    setData(response);
    
  };
  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useSearchQuery;
