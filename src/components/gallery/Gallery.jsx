import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import GalleryItem from "./GalleryItem"
import axios from "axios"
import InfiniteScroll from 'react-infinite-scroll-component'

const fetchPins=async({pageParam,search,userId,boardId})=>{
  const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pin?cursor=${pageParam}&search=${search || ""}&userId=${userId || ""}&boardId=${boardId || ''}`)
  return res.data
}

const Gallery = ({search,userId,boardId}) => {
  const {data,fetchNextPage, hasNextPage, status} = useInfiniteQuery({
      queryKey:["pins",search, userId],
      queryFn:({pageParam = 0})=>fetchPins({pageParam,search,userId,boardId}),
      initialPageParam:0,
      getNextPageParam:(lastPage, pages)=>lastPage.nextCursor
    })
  if(status === "error") return "Something went wrong"
  if(status === "pending") return "Loading..."

  const allPins = data?.pages.flatMap((page)=>page.pins) || []
  return (
    <InfiniteScroll 
      dataLength={allPins.length} 
      next={fetchNextPage} 
      hasMore={!!hasNextPage} 
      loader={<h4>Loading more pins</h4>}
      endMessage={<p>All Posts Loaded!</p>}
    >
      <div className="columns-1 sm:columns-2 md:columms-3 lg:columns-5  gap-4">
        {allPins?.map((item) => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default Gallery