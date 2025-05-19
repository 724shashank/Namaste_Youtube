import user from "../assets/user.png";
const ChatMessage = ({name,message}) => {
  return (
    <div className="flex m-5 p-1">
      <div>
        <img className="w-8" src={user} alt="user" />
      </div>
      <div>
        <span className="mx-2 font-bold ">{name}</span>
        <span className="">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
