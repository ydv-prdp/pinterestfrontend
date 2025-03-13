import { useEffect, useRef } from "react"
import useEditorStore from "../../utils/editorStore"
import ImageComp from "../image/ImageComp"

const WorkSpace = ({previewImg}) => {
    const {textOptions,setTextOptions, canvasOptions, setCanvasOptions,setSelectedLayer} = useEditorStore()
    useEffect(()=>{
        if(canvasOptions.height === 0){
            const canvasHeight = (375 * previewImg.height) / previewImg.width;
            setCanvasOptions({
                ...canvasHeight, height:canvasHeight, orientation:canvasHeight > 375 ? "portrait" : "landscape"
            })
        }
    },[previewImg, canvasOptions, setCanvasOptions])
    const itemRef = useRef(null)
    const containerRef = useRef(null)
    const dragging = useRef(false)
    const offset = useRef({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!dragging.current) return;
        setTextOptions({
          ...textOptions,
          left: e.clientX - offset.current.x,
          top: e.clientY - offset.current.y,
        });
      };
    const handleMouseUp=(e)=>{
        dragging.current = false
    }

    const handleMouseLeave=(e)=>{
        dragging.current = false
    }

    const handleMouseDown = (e) => {
        setSelectedLayer("text");
        dragging.current = true;
        offset.current = {
          x: e.clientX - textOptions.left,
          y: e.clientY - textOptions.top,
        };
      };

    return (
    <div className="flex flex-3 items-center justify-center bg-[#e9e9e9] py-[64px]">
        <div className="w-[375px] rounded-[32px] overflow-hidden flex items-center justify-center relative"
            style={{height:canvasOptions.height, backgroundColor:canvasOptions.backgroundColor}}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
        >
            <img src={previewImg?.url} alt="" className="object-cover w-[100%]"/>
            {textOptions.text && (
                <div 
                    className="absolute z-99 max-w-[100%] border-2 border-dashed border-red-500"
                    style={{left:textOptions.left, top:textOptions.top, fontSize:`${textOptions.fontSize}px`}}  
                    onMouseDown={handleMouseDown}
                    ref={itemRef}
                >
                    <input 
                        type="text" 
                        value={textOptions.text} 
                        onChange={e=>setTextOptions({...textOptions,text:e.target.value})}
                        style={{color:textOptions.color}}
                        className="border-none outline-none bg-transparent cursor-grab w-[100%]"
                    />
                    <div className="cursor-pointer absolute top-5 right-0 bg-white w-[32px] h-[32px] flex items-center justify-center p-2 rounded-lg" onClick={()=>setTextOptions({...textOptions, text:""})}>
                        <ImageComp path={"/general/delete.svg"} alt={""}/>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default WorkSpace