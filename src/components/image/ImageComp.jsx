import { IKImage } from "imagekitio-react"

const ImageComp = ({path,src, alt, className,w,h}) => {
  return (
    <IKImage
    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
    path={path}
    src={src}
    transformation={[{
      width:w,
      height:h
    }]}
    alt={alt}
    loading="lazy"
    lqip ={{active:true, quality:20}}
    className={className}    
  />
  )
}

export default ImageComp