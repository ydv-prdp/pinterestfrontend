import { IKImage } from "imagekitio-react"

const ImageComp = ({path, alt, className,w,h}) => {
  return (
    <IKImage
    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
    // path={`/pins/pin${item}.jpeg`}
    path={path}
    transformation={[{
      width:w,
      height:h
    }]}
    alt={alt}
    loading="lazy"
    lqip ={{active:true, quality:20}}
    className={className}
    // className="rounded-lg object-cover"
    
  />
  )
}

export default ImageComp