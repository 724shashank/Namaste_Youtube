import Comment from "./Comment";
const CommentList = ({ data }) => {
  return (
    <>
      <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments</h1>
        {data.map((item, index) => (
          <Comment key={index} details={item} />
        ))}
      </div>
    </>
  );
};

export default CommentList;
