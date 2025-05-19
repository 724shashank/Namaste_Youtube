import user from "../assets/user.png";
const Comment = ({ details }) => {
  const { name, comment, reply } = details;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
        <img className="w-8 object-contain" src={user} alt="user_logo" />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{comment}</p>
        </div>
      </div>

      <div className="pl-5 border-l ml-5">
        {reply.map((nest, index) => (
          <Comment key={index} details={nest} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
