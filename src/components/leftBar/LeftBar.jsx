import { Link } from "react-router"
import ImageComp from "../image/ImageComp"

const LeftBar = () => {
  return (
    <div className="flex w-[72px] my-6 flex-col justify-between items-center h-[100vh] sticky top-0 border-r border-r-[#e9e9e9]">
      <div className="flex flex-col items-center gap-6">
        <Link to="/" className="w-[30px] hover:bg-[#f1f1f1]">
          <ImageComp path="/general/logo.png"  alt="Logo"/>
        </Link>
        <Link to="/"  className="flex items-center justify-center w-[50px] hover:bg-[#f1f1f1] hover:rounded-lg py-3 px-3">
          <ImageComp path="/general/home.svg" alt="Logo"/>
        </Link>
        <Link to="/create"  className="flex items-center justify-center w-[50px] hover:bg-[#f1f1f1] hover:rounded-lg py-3 px-3">
          <ImageComp path="/general/create.svg" alt="Logo"/>
        </Link>
        <Link to="/"  className="flex items-center justify-center w-[50px] hover:bg-[#f1f1f1] hover:rounded-lg py-3 px-3 ">
          <ImageComp path="/general/updates.svg" alt="Logo"/>
        </Link>
        <Link to="/"  className="flex items-center justify-center w-[50px] hover:bg-[#f1f1f1] hover:rounded-lg py-3 px-3">
          <ImageComp path="/general/messages.svg" alt="Logo"/>
        </Link>
      </div>
      <Link to="/"  className="flex items-center justify-center w-[50px] hover:bg-[#f1f1f1] hover:rounded-lg py-3 px-3">
          <ImageComp path="/general/settings.svg" alt="Logo"/>
      </Link>
    </div>
  )
}

export default LeftBar