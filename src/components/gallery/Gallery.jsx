import GalleryItem from "./GalleryItem"

const Gallery = () => {
  const items = []
  for (let i = 1; i < 26; i++) {
    items.push(i)
  }
  return (
    <div className="columns-1 sm:columns-2 md:columms-3 lg:columns-5  gap-4"
   
    >
      {items.map((item, index) => (
        <GalleryItem key={index} item={item} />
      ))}
    </div>
  )
}

export default Gallery