import { useEffect, useState } from "react";
import { YT_URL } from "../utils/constants";

const useGetVideos = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const response = await fetch(YT_URL + import.meta.env.VITE_API_KEY);
    const json = await response.json();
    setData(json);
  
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useGetVideos;
