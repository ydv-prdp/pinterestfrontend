import { useQuery } from "@tanstack/react-query";
import ImageComp from "../image/ImageComp"
import apiRequest from "../../utils/apiRequest";
import {format} from "timeago.js"
import { Link } from "react-router";

const Boards = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`/board/${userId}`).then((res) => res.data)
  })
  if (isPending) return "Loading"
  if (error) return "An error has occurred: " + error.message;
  if (!data) return "Board not found"
  console.log(data)
  return (
    <div className="w-[100%] grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-5 gap-4 ">
      {data?.map((board) => (
        <Link to={`/search?boardId=${board._id}`} key={board._id} className="mb-12 cursor-pointer">
          <ImageComp src={board.firstPin.media} className={"w-[100%] h-[100%] object-cover rounded-[16px]"} />
          <div className="flex flex-col gap-2">
            <h1 className="font-[500] text-[16px]">{board.title}</h1>
            <span className="text-gray-500 text-[13px]" >{board.pinCount} Pins . {format(board.createdAt)}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Boards