import ImageComp from "../image/ImageComp"
import UserButton from "./UserButton"

const TopBar = () => {
  return (
    <div className="my-4 flex items-center justify-center gap-4">
        <div className="flex-1 bg-[#f1f1f1] rounded-lg p-3 flex items-center gap-4">
            <ImageComp path={"/general/search.svg"}/>
            <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none border-none text-[18px]"/>
        </div>
        <UserButton/>
    </div>
  )
}

export default TopBar