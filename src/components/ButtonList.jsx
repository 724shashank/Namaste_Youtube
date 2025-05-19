import Button from "./Button";
import useGetVideos from "../customHooks/useGetVideos";

const ButtonList = () => {
  const data = useGetVideos();
  
  // Get all tags from the video items
  const arr2 = data?.items.flatMap((list) => list?.snippet?.tags || []);
  
  // Remove duplicates
  const uniqueTags = Array.from(new Set(arr2));

  return (
    <div className="flex overflow-x-auto no-scrollbar">
    
      {uniqueTags.map((tag, index) => (
        <Button key={`tag-${index}`} name={tag} />
      ))}
    </div>
  );
};

export default ButtonList;
