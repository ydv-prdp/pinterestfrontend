import { useState } from "react"
import ImageComp from "../../components/image/ImageComp"
import Collections from "../../components/collections/Collections"
import Gallery from "../../components/gallery/Gallery"

const UserProfile = () => {
  const [type, setType] = useState("created")
  return (
    <div className="flex flex-col items-center gap-4">
      <ImageComp
        path={'/general/noAvatar.png'} alt={"logo"} className={"w-[100px] h-[100px] rounded-lg object-cover"}
      />
      <h1 className="text-[36px]">John Doe</h1>
      <span className="text-gray-400 font-[300]">@johndoe</span>
      <div className="font-[500]">10 followers . 20 following</div>
      <div className="flex items-center gap-4">
        <ImageComp path={'/general/share.svg'} alt="Logo" />
        <div className="flex gap-4">
          <button className="bg-[#f1f1f1] text-black px-4 py-2 rounded-full cursor-pointer hover:opacity-50">Message</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full cursor-pointer hover:opacity-50">Follow</button>
        </div>
        <ImageComp path={'/general/more.svg'} alt="Logo" />
      </div>
      <div className="flex gap-4 font-[500] ">
        <span onClick={()=>setType("created")} className={type=="created" ? "border-b-black border-b-2":"cursor-pointer  hover:text-gray-500"}>Created</span>
        <span onClick={()=>setType("saved")} className={type=="saved" ? "border-b-black border-b-2":"cursor-pointer  hover:text-gray-500"}>Saved</span>
      </div>
      {type=="created"? <Gallery/>:<Collections/>}
    </div>
  )
}

export default UserProfile