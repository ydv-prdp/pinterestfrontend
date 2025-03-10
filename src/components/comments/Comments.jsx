import { useState } from "react"
import ImageComp from "../image/ImageComp"
import EmojiPicker from "emoji-picker-react"
const Comments = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className="flex flex-1 flex-col gap-4 sm:max-h-[75vh]">
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
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
      </div>
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