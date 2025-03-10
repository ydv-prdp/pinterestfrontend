import Comments from "../../components/comments/Comments"
import ImageComp from "../../components/image/ImageComp"
import PostInteraction from "../../components/postInteract/PostInteraction"
import { Link } from 'react-router'


const PostPage = () => {
  return (
    <div className="flex justify-center gap-8">
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        style={{ cursor: "pointer" }}
      >
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
      </svg>
      <div className="w-[70%] flex flex-col max-h-unset md:max-w-[100%] md:flex-row lg:flex-row lg:mr-4 border-[#e9e9e9] border-2 rounded-lg overflow-hidden ">
        <div className="flex-1 bg-[#c0a68c] max-h-[820px]">
          <ImageComp path={'/pins/pin1.jpeg'} alt="image" className={"w-[100%] h-[100%] object-cover"} w={736} />
        </div>
        <div className="flex-1 h-[100%] flex flex-col gap-4 p-4 overflow-hidden">
          <PostInteraction />
          <Link to="/john" className="flex items-center gap-2">
            <ImageComp path={'/general/noAvatar.png'} className={"w-[32px] h-[32px] rounded-1/2"} />
            <span className="text-[14px]">John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  )
}

export default PostPage