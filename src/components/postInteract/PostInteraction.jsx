import ImageComp from "../image/ImageComp"

const PostInteraction = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <ImageComp path={"/general/react.svg"} alt={"Logo"}/>
        <h2>273</h2>
        <ImageComp path={"/general/share.svg"} alt={"Logo"}/>
        <ImageComp path={"/general/more.svg"} alt={"Logo"}/>
      </div>
      <button className="bg-[#e50829] text-white border-none rounded-[24px] px-4 py-1 cursor-pointer hover:opacity-50">Save</button>
    </div>
  )
}

export default PostInteraction