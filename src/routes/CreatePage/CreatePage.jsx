import { useEffect, useState } from "react"
import ImageComp from "../../components/image/ImageComp"
import useAuthStore from '../../utils/authStore'
import { useNavigate } from "react-router"
import Editor from "../../components/editor/Editor"

const CreatePage = () => {
  const {currentUser} = useAuthStore()
  const navigate = useNavigate();
  const [file, setFile]=useState(null)
  const [previewImg, setPreviewImg]=useState({
    url:"",
    width:0,
    height:0
  })
  const [isEditing, setIsEditing]=useState(false)
  useEffect(()=>{
    if(!currentUser){
      navigate("/auth")
    }
  },[navigate, currentUser])

  useEffect(() => {
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setPreviewImg({
          url: URL.createObjectURL(file),
          width: img.width,
          height: img.height,
        });
      };
    }
  }, [file]);

  return (
    <div className="createPage">
        <div className="border-t-[#e9e9e9] border-t-1 border-b-[#e9e9e9] border-b-1 py-4 flex items-center justify-between">
          <h1 className="text-[20px] font-[500]">{isEditing ? "Design your pin" : "Create pin"}</h1>
          <button className="bg-[#e50829] text-white font-[500] outline-none px-4 py-2 hover:opacity-50 rounded-[32px] cursor-pointer">{isEditing ? "Done" : "Publish"}</button>
        </div>
        {isEditing ? <Editor previewImg={previewImg}/>:(
        <div className="mt-[32px] flex justify-center gap-16 flex-col items-center lg:flex-row mb-4">
         {previewImg.url ? 
          (
            <div className="w-[375px] relative">
              <img src={previewImg.url} alt="" className="rounded-[32px] w-[100%]"/>
              <div className="absolute top-[16px] right-[16px] cursor-pointer bg-white w-[40px] h-[40px] flex items-center justify-center p-[6px] rounded-full" onClick={()=>setIsEditing(true)} >
                <ImageComp path={'/general/edit.svg'} alt=""/>
              </div>
            </div>
          ) : 
          (<> <label htmlFor="file" className="bg-[#e9e9e9] relative cursor-pointer text-[18px] flex items-center justify-center rounded-[32px] border-[#dddddd] border-dashed border-2 w-[375px] p-4 h-[574px]">
            <div className="flex flex-col items-center gap-4">
              <ImageComp path={"/general/upload.svg"} alt={""}/>
              <span>Choose a file</span>
            </div>
            <div className="absolute bottom-[32px] text-[13px] text-center text-gray-500">
              We recommend using high quality .jpg files less than 20 files less than 200MB
            </div>
          </label>
          <input 
            type='file' 
            id='file'
            onChange={(e)=>setFile(e.target.files[0])}
            hidden
          
          />
          </>
          )}
          <form className="flex flex-col gap-8 w-[584px]">
            <div className="createFormItem">
              <label htmlFor="title">Title</label>
              <input type="text" placeholder="Add a title" name="title" id="title"/>
            </div>
            <div className="createFormItem">
              <label htmlFor="description">Description</label>
              <input type="textarea" placeholder="Add a description" name="description" id="description"/>
            </div>
            <div className="createFormItem">
              <label htmlFor="link">Link</label>
              <input type="text" placeholder="Add a Link" name="link" id="link"/>
            </div>
            <div className="createFormItem">
              <label htmlFor="board">Board</label>
              <select name="board" id="board">
                <option>Choose a board</option>
                <option value={"1"}>Board 1</option>
                <option value={"2"}>Board 2</option>
                <option value={"3"}>Board 3</option>
              </select>
            </div>
            <div className="createFormItem">
              <label htmlFor="tags">Board</label>
              <input type="text" placeholder="Add tags" name="tags" id="tags"/>
               <small>Dont worry, people wont see your tags</small>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default CreatePage