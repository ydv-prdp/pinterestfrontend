import Layers from "./Layers"
import Options from "./Options"
import WorkSpace from "./WorkSpace"

const Editor = ({previewImg}) => {
    console.log(previewImg)
  return (
    <div className="flex">
        <Layers previewImg={previewImg}/>
        <WorkSpace  previewImg={previewImg}/>
        <Options  previewImg={previewImg}/>
    </div>
  )
}

export default Editor