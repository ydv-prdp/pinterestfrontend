import { Link } from "react-router"
import { IKImage } from 'imagekitio-react';
import ImageComp from "../image/ImageComp";

const GalleryItem = ({ item }) => {
  return (
    <div  className="relative group mb-4 break-inside-avoid" >
      <ImageComp
        path={`/pins/pin${item}.jpeg`}
        alt={"image"}
        className={"rounded-lg object-cover"}
        w={500}
      />
      <Link to={`/pin/${item}`} className="hidden group-hover:block absolute w-[100%] h-[100%] bg-black top-0 right-0 rounded-[4px] border-4 opacity-30">
      </Link>
      <button className="hidden group-hover:block bg-red-500 py-2 cursor-pointer px-4 text-white rounded-lg absolute top-0 right-3 opacity-75 hover:block">Save</button>
      <div className="hidden group-hover:flex absolute bottom-4 right-4 items-center gap-2">
        <button className="w-[32px] h-[32px] rounded-lg bg-white flex items-center p-2 hover:bg-[#f1f1f1]">
          <img src="/general/share.svg" alt="" />
        </button>
        <button className="w-[32px] h-[32px] rounded-lg bg-white flex items-center justify-center p-2 hover:bg-[#f1f1f1]">
          <img src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default GalleryItem