import { useState } from "react"
import ImageComp from "../../components/image/ImageComp"
import Gallery from "../../components/gallery/Gallery"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import apiRequest from "../../utils/apiRequest"
import Boards from "../../components/boards/Boards"
import FollowButton from "./FollowButton"

const UserProfile = () => {
  const [type, setType] = useState("created")
  const {username} = useParams()
  const {isPending,error,data} = useQuery({
    queryKey:["pin",username],
    queryFn:()=>apiRequest.get(`/users/${username}`).then((res)=>res.data)
  })
  if(isPending) return "Loading"
  if(error) return "An error has occurred: " + error.message;
  if(!data) return "User not found"
  return (
    <div className="flex flex-col items-center gap-4">
      <ImageComp
        src={data?.img}
        alt={"logo"} className={"w-[100px] h-[100px] rounded-lg object-cover"}
      />
      <h1 className="text-[36px]">{data?.displayName}</h1>
      <span className="text-gray-400 font-[300]">@{data?.username}</span>
      <div className="font-[500]">{data.followerCount} followers . {data.followingCount} following</div>
      <div className="flex items-center gap-4">
        <ImageComp path={'/general/share.svg'} alt="Logo" />
        <div className="flex gap-4">
          <button className="bg-[#f1f1f1] text-black px-4 py-2 rounded-full cursor-pointer hover:opacity-50">Message</button>
          <FollowButton isFollowing={data.isFollowing} username={data.username}/>
        </div>
        <ImageComp path={'/general/more.svg'} alt="Logo" />
      </div>
      <div className="flex gap-4 font-[500] ">
        <span onClick={()=>setType("created")} className={type=="created" ? "border-b-black border-b-2":"cursor-pointer  hover:text-gray-500"}>Created</span>
        <span onClick={()=>setType("saved")} className={type=="saved" ? "border-b-black border-b-2":"cursor-pointer  hover:text-gray-500"}>Saved</span>
      </div>
      {type=="created"? <Gallery userId = {data._id}/>:<Boards userId = {data._id}/>}
    </div>
  )
}

export default UserProfile