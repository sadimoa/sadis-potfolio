import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import AnimatedBackground from "./components/AnimatedBackground";
import LoadingScreen from "./components/LoadingScreen";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <LoadingScreen />
      <ScrollProgress />
      <AnimatedBackground />
      <CustomCursor />
      <ThemeToggle />
      <div className="flex">
        <SideBar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App