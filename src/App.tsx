import { CarouselLyout } from "./components/Carousel"
import { DropDownMenu } from "./components/DropDown"
import { Modals } from "./components/Modals"
import { Navbar } from "./components/Navbar"


function App() {

  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="text-4xl font-bold">
        React Template with tailwind, shadcn, react-router-dom & react-icons
      </h1>

      <Modals />
      <DropDownMenu />
      <CarouselLyout />
      <Navbar />
    </div>
  )
}

export default App
