import chatBoxApi from "@/services/axios/actions/chatbox.action";
import useAuth from "@/stores/useAuth";
import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
// import ChatBoxApi from "../../../apis/chatboxApi";
// import { Avatar } from "antd";
import { toast } from "react-toastify";
// import ReactMarkdown from "react-markdown";
import DOMPurify from "dompurify";
export default function ChatBox() {
  const { user } = useAuth();
  const [isOpenChatbox, setIsOpenChatbox] = useState(false);
  const [message, setMessage] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [messHistory, setMessHistory] = useState([
    {
      role: "ai",
      message: "Chào bạn! Tôi có thể giúp gì cho bạn nhỉ?",
    },
  ]);

  const loadingListMessage = [
    "Đang xử lý câu hỏi...",
    "Đang phân tích...",
    "Đang lập kế hoạch...",
    "Đang tạo câu trả lời...",
  ];
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isloading) {
      setLoadingTextIndex(0);

      interval = setInterval(() => {
        setLoadingTextIndex((prev) => {
          if (prev === loadingListMessage.length - 1) {
            if (interval !== undefined) clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    }

    return () => {
      if (interval !== undefined) clearInterval(interval);
    };
  }, [isloading]);

  function handleOpenChatBox() {
    if (!user) {
      toast.error("Vui lòng đăng nhập!");
    } else {
      setIsOpenChatbox(true);
    }
  }
  const handleSendMessage = async () => {
    const mess = {
      role: "user",
      message: message,
    };
    setMessHistory((prev) => [...prev, mess]);
    setMessage("");
    setIsLoading(true);
    try {
      const res = await chatBoxApi.sendMessage(message);
      const responseMess = {
        role: "ai",
        message: res.data,
      };
      setMessHistory((prev) => [...prev, responseMess]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={`overscroll-x-auto fixed bottom-3 right-3 z-50`}>
      <div
        onClick={() => handleOpenChatBox()}
        className={`px-4 py-2 bg-secondary text-white cursor-pointer rounded-full text-[18px] ${isOpenChatbox ? "hidden" : ""}`}
      >
        Mở ChatBox
      </div>
      {isOpenChatbox ? (
        <div className="overflow-hidden w-[25vw] h-[65vh] border-gray-200 border bg-[#fff] rounded-xl inset-shadow-sm shadow-xl relative">
          <div className="flex justify-between items-center py-2 bg-secondary px-4 rounded-t-xl w-[25vw] shadow-lg sticky  top-0">
            <p className="text-[#fff] font-bold text-lg">Trợ lí Từ Từ</p>
            <button
              onClick={() => {
                setMessHistory([
                  {
                    role: "ai",
                    message: "Chào bạn! Tôi có thể giúp gì cho bạn nhỉ?",
                  },
                ]);
                setIsOpenChatbox(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} color="white" size="sm" />
            </button>
          </div>
          <div className="overflow-y-auto no-scrollbar max-h-[72%] p-4">
            {messHistory.map((mess, index) => {
              return (
                <div key={index}>
                  {mess.role === "user" ? (
                    <div className="justify-end items-end gap-2 flex">
                      <div className="p-2 flex flex-col text-sm max-w-[80%] bg-[#fb61aefa] text-white rounded-b-xl rounded-tl-xl mt-2 text-right">
                        <div
                          dangerouslySetInnerHTML={{ __html: mess.message }}
                        />
                      </div>
                      <div className="w-10 h-10">
                        <Avatar
                          src={user?.avatar?.url}
                          alt="avatar"
                          className="border-2 rounded-full border-black"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="justify-start flex">
                      <div className="p-2 flex flex-col text-sm max-w-[80%] bg-[#cecece8e] rounded-b-xl rounded-tr-xl mt-2 text-left">
                        {/* fix lỗi chatbox render ra item tràng - do style tailwind chưa dc sử dụng trc nên chưa hiểu */}
                        <div className="hidden w-16"></div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: mess.message,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {isloading ? (
              <div className="p-2 w-fit bg-[#cecece8e]  rounded-b-xl rounded-tr-xl mt-2 text-sm">
                {loadingListMessage[loadingTextIndex]}
              </div>
            ) : null}
          </div>
          <div className="h-[15%] w-[25vw] absolute bottom-0 bg-white border-t border-t-[#929191] px-4 py-3 justify-between flex">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-[#929191] focus:border-[#fb61aefa] focus:ring-1 focus:ring-[#fb61aefa] w-[85%] h-[100%] rounded-md px-2 outline-none text-[13px]"
              placeholder="Nhập câu hỏi..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />

            <button className="p-2" onClick={handleSendMessage}>
              <FontAwesomeIcon icon={faPaperPlane} size="xl" color="blue" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
