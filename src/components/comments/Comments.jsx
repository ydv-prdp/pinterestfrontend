import { useState } from "react"
import ImageComp from "../image/ImageComp"
import EmojiPicker from "emoji-picker-react"
import { useQuery } from "@tanstack/react-query"
import apiRequest from "../../utils/apiRequest"
import { format } from "timeago.js"
const Comments = ({id}) => {
  const [open,setOpen] = useState(false)
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => apiRequest.get(`/comment/${id}`).then((res) => res.data)
  })
  if (isPending) return "Loading"
  if (error) return "An error has occurred: " + error.message;
  if (!data) return "Board not found"
  console.log(data)
  return (
    <div className="flex flex-1 flex-col gap-4 sm:max-h-[75vh]">
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
        <span className="">{data.length} comments</span>
        {data.map((item)=>(
          <div className="flex gap-4" key={item._id}>
          <ImageComp src={item.user.img} alt="Logo" className={"w-[32px] h-[32px] object-cover rounded-full"}/>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-[14px]">{item?.user.displayName}</span>
            <p className="text-[14px]">{item.description}</p>
            <span className="text-[12px] text-[#a6a6a6]">{format(item.updatedAt)}</span>
          </div>
        </div>
        ))}  
      </div>
      {/* <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
        <span className="">5 comments</span>
        <div className="flex gap-4">
          <ImageComp path={'/general/noAvatar.png' } alt="Logo" className={"w-[32px] h-[32px] object-cover"}/>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-[14px]">John Doe</span>
            <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores dignissimos nemo ipsa optio accusamus, necessitatibus aliquid perferendis quibusdam quis?
            </p>
            <span className="text-[12px] text-[#a6a6a6]">1hr</span>
          </div>
        </div>     
      </div> */}
      <form className="bg-[#f1f1f1] p-4 rounded-[32px] flex items-center">
        <input  type="text" placeholder="Add a comment" className="flex-1 px-4 border-none bg-transparent text-[16px] outline-none"/>
        <div className="cursor-pointer relative text-[20px] ">
        <div onClick={()=>setOpen(!open)}>😊</div>
        {open &&<div className="absolute right-0 bottom-[50px]">
          <EmojiPicker/>
        </div>}
      </div>
      </form>
    </div>
  )
}

export default Comments