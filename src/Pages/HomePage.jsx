import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import SideBar from "../components/SideBar";

const HomePage = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col gap-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
