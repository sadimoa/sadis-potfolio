import About from "../components/About"
import SideBar from "../components/SideBar"


const AboutPage = () => {
  return (
    <div className="flex w-full min-h-screen">
      <SideBar />
      <About />
    </div>
  )
}

export default AboutPage