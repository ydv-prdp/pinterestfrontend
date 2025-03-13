import useEditorStore from "../../utils/editorStore"
import ImageComp from "../image/ImageComp"

const Layers = () => {
    const {selectedLayer, setSelectedLayer,addText,canvasOptions} = useEditorStore()
    const handleSelectedLayer=(layer)=>{
        setSelectedLayer(layer)
        if(layer === "text"){
            addText();
        }
    }
    console.log(canvasOptions)
  return (
    <div  className="flex-1 flex-col gap-[16px] mt-[32px]">
        <div className="layersTitle">
            <h3 className="text-[20px] font-[500]">Layers</h3>
            <p className="text-[14px] text-gray-500 mt-1">Select a layer to edit</p>
        </div>
        <div onClick={()=>handleSelectedLayer("text")} className={`layer ${selectedLayer === "text" ? "selected": ""}`}>
            <div className="w-[48px] h-[48px] rounded-[8px] overflow-hidden">
                <ImageComp path={"/general/text.png"} alt=""/>
            </div>
            <span>Add Text</span>
        </div>
        <div onClick={()=>handleSelectedLayer("canvas")} className={`layer  ${selectedLayer === "canvas" ? "selected": ""}`}>
            <div className="w-[48px] h-[48px] rounded-[8px] overflow-hidden" style={{backgroundColor:canvasOptions.backgroundColor || "#913232"}}>
                <span>Canvas</span>
            </div>
        </div>
    </div>
  )
}

export default Layers