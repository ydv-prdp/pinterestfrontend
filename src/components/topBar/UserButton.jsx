import { useState } from "react";
import ImageComp from "../image/ImageComp";

const UserButton = () => {
    const currentUser = true;
    const [open,setOpen] = useState(false)
  return currentUser ? (
    <div className="hidden sm:flex items-center justify-center gap-4 relative ">
        <ImageComp path="/general/noAvatar.png" className="w-[36px] h-[36px] object-cover border-[100%]" alt=""/>
        <ImageComp onClick={()=>setOpen(!open)} path="/general/arrow.svg" className="w-[16px] h-[16px] cursor-pointer object-cover border-[100%]" alt=""/>
       {open && <div className="overflow-hidden absolute top-10 left-2 bg-white z-999 flex flex-col text-sm shadow-2xl border-2  rounded-lg">
            <div className="hover:bg-[#f1f1f1] px-3 py-2  rounded-lg cursor-pointer">Profile</div>
            <div className="hover:bg-[#f1f1f1] px-3 py-2 cursor-pointer">Setting</div>
            <div className="hover:bg-[#f1f1f1] px-3 py-2 cursor-pointer">Logout</div>
        </div>}
    </div>
  ):
  (
    <a href="/" className="text-[16px] p-3 rounded-lg hover:bg-[#f1f1f1]">
        Login / Sign Up
    </a>
  )
}

export default UserButton