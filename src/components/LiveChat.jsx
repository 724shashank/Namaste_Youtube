import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat, removeChat } from "../redux/slices/liveChatSlice";
import { generateRandomName } from "../utils/helper";
import send from "../assets/send.png"

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveData = useSelector((store) => store.chat_data?.data);
  const [chat, setChat] = useState("");

  const handleChat = (e) => {
    e.preventDefault();
    if (chat.trim() === "") return; // Early Return if empty string

    dispatch(
      addChat({
        name: "You",
        message: chat,
      })
    );
    setChat("");
  };

  useEffect(() => {
    //Here we are doing API Polling
    const interval = setInterval(() => {
      dispatch(
        addChat({
          name: generateRandomName(),
          message: "This is the live feature of YouTube",
        })
      );
      if (liveData.length >= 100) {
        dispatch(removeChat(20));
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, liveData]);

  return (
    <>
      <div className="flex flex-col-reverse border h-[600px] overflow-y-scroll bg-gray-100 shadow-sm rounded-t-md">
        {liveData &&
          liveData.map((x, i) => (
            <ChatMessage key={i} name={x.name} message={x.message} />
          ))}
      </div>
      <div className=" p-3 border-1 rounded-b-md flex">
        <form className="w-full" onSubmit={(e)=>e.preventDefault()}>
          <input
            className="rounded-xl p-2 w-[100%] bg-[#F3F4F6]"
            type="text"
            placeholder="Say something..."
            value={chat}
            onChange={(e) => setChat(e.target.value)}
          />
        </form>
        <button className="mx-1 p-2 cursor-pointer rounded-xl" onClick={(e) => handleChat(e)}><img className="w-6 h-5" src={send} alt="send" /></button>
      </div>
    </>
  );
};

export default LiveChat;
