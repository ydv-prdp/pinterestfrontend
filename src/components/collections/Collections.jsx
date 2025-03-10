import ImageComp from "../image/ImageComp"

const Collections = () => {
  return (
    <div className="w-[100%] grid grid-cols-5 gap-4">
      <div className="cursor-pointer mb-10">
        <ImageComp path="/pins/pin1.jpeg" className={"w-[100%] h-[100%] object-cover rounded-[16px]"}/>
        <div className="flex flex-col gap-2"> 
          <h1 className="font-[500] text-[16px]">Minimalist Bedrooms</h1>
          <span className="text-gray-500 text-[13px]" >12 Pins . 1w</span>
        </div>
      </div>
    </div>
  )
}

export default Collections