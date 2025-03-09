import Gallery from "./components/gallery/Gallery"
import LeftBar from "./components/leftBar/LeftBar"
import TopBar from "./components/topBar/TopBar"

const App = () => {
  return (
    <div className="w-full flex gap-1 text-black">
      <LeftBar/>
      <div className="flex-1 mr-4">
        <TopBar/>
        <Gallery/>
      </div>
    </div>
  )
}

export default App