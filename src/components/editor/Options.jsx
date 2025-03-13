import { useState } from "react";
import useEditorStore from "../../utils/editorStore"
import { HexColorPicker } from "react-colorful"
const portraitSizes = [
    {
        name: "1:2",
        width: 1,
        height: 2,
    },
    {
        name: "9:16",
        width: 9,
        height: 16,
    },
    {
        name: "2:3",
        width: 2,
        height: 3,
    },
    {
        name: "3:4",
        width: 3,
        height: 4,
    },
    {
        name: "4:5",
        width: 4,
        height: 5,
    },
    {
        name: "1:1",
        width: 1,
        height: 1,
    },
];

const landscapeSizes = [
    {
        name: "2:1",
        width: 2,
        height: 1,
    },
    {
        name: "16:9",
        width: 16,
        height: 9,
    },
    {
        name: "3:2",
        width: 3,
        height: 2,
    },
    {
        name: "4:3",
        width: 4,
        height: 3,
    },
    {
        name: "5:4",
        width: 5,
        height: 4,
    },
    {
        name: "1:1",
        width: 1,
        height: 1,
    },
];


const Options = ({previewImg}) => {
    const { selectedLayer, textOptions, setTextOptions, canvasOptions, setCanvasOptions } = useEditorStore();
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
    const originalOrientation =previewImg.width < previewImg.height ? "portrait" : "landscape";
    const handleSizeClick = (size) => {
        let newHeight;
    
        if (size === "original") {
          if (
            // FIXED: SHORTEN
            // (originalOrientation === "portrait" &&
            //   canvasOptions.orientation === "portrait") ||
            // (originalOrientation === "landscape" &&
            //   canvasOptions.orientation === "landscape")
            originalOrientation === canvasOptions.orientation
          ) {
            newHeight = (375 * previewImg.height) / previewImg.width;
          } else {
            newHeight = (375 * previewImg.width) / previewImg.height;
          }
        } else {
          newHeight = (375 * size.height) / size.width;
        }
    
        setCanvasOptions({
          ...canvasOptions,
          size: size === "original" ? "original" : size.name,
          height: newHeight,
        });
      };
    
    const handleOrientationClick = (orientation) => {
        let newHeight;
    
        if (
          // FIXED: SHORTEN
          // (originalOrientation === "portrait" && orientation === "portrait") ||
          // (originalOrientation === "landscape" && orientation === "landscape")
          originalOrientation === orientation
        ) {
          newHeight = (375 * previewImg.height) / previewImg.width;
        } else {
          newHeight = (375 * previewImg.width) / previewImg.height;
        }
    
        setCanvasOptions({
          ...canvasOptions,
          orientation,
          size: "original",
          height: newHeight,
        });
      };
    

    return (
        <div className="flex-1 mt-[32px] ml-2">
            {selectedLayer === "text" ? (
                <div className="">
                    <div className="flex flex-col gap-2 mb-2">
                        <span className="font-[500]">Font Size</span>
                        <input
                            type={"number"}
                            value={textOptions.fontSize}
                            onChange={(e) => setTextOptions({ ...textOptions, fontSize: e.target.value })}
                            className="border-[#e0e0e0] border-2 rounded-2 p-4"
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-2">
                        <span className="font-[500]">Color</span>
                        <div className="relative">
                            <div
                                className="w-[36px] h-[36px] rounded-full cursor-pointer"
                                style={{ backgroundColor: textOptions.color }}
                                onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                            />

                            {isColorPickerOpen && (
                                <div className="colorPicker">
                                    <HexColorPicker
                                        color={textOptions.color}
                                        onChange={(color) => setTextOptions({ ...textOptions, color: color })}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="">
                    <div className="flex flex-col gap-2 mb-2">
                        <span>Orientation</span>
                        <div className="px-3  py-2 rounded-2 bg-[#e9e9e9] flex font-[500] text-[14px] w-max gap-3">
                            <div onClick={()=>handleOrientationClick("portrait")} className={`orientation ${canvasOptions.orientation === 'portrait' ? 'selected' : ""}`}>
                                P
                            </div>
                            <div onClick={()=>handleOrientationClick("landscape")}  className={`orientation ${canvasOptions.orientation === 'landscape' ? 'selected' : ""}`}>
                                L
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-2">
                        <span>Size</span>
                        <div className="px-3 py-2 rounded-2 bg-[#e9e9e9] flex font-[500] text-[14px] w-max gap-3">
                            <div  onClick={()=>handleSizeClick("original")}  className={`size ${canvasOptions.size === 'original' ? 'selected' : ""}`}>
                                Original
                            </div>
                            {canvasOptions.orientation === "portrait" ? (
                                <>
                                    {portraitSizes.map(size => (
                                        <div  onClick={()=>handleSizeClick(size)}  className={`size ${canvasOptions.size === size.name ? 'selected' : ""}`} key={size.name}>
                                            {size.name}
                                        </div>
                                    ))}
                                </>
                            ) : (<>
                                {landscapeSizes.map(size => (
                                    <div   onClick={() => handleSizeClick(size)} className={`size ${canvasOptions.size === size.name ? 'selected' : ""}`} key={size.name}>
                                        {size.name}
                                    </div>
                                ))}
                            </>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-2">
                        <span>BackgroundColor</span>
                        <div className="bgColor">
                            <div className="relative">
                                <div
                                    className="w-[36px] h-[36px] rounded-full cursor-pointer"
                                    style={{ backgroundColor: canvasOptions.backgroundColor || "#913232" }}
                                    onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                                />

                                {isColorPickerOpen && (
                                    <div className="colorPicker">
                                        <HexColorPicker
                                            color={canvasOptions.backgroundColor || "#913232"}
                                            onChange={(color) => setCanvasOptions({ ...canvasOptions, backgroundColor: color })}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Options