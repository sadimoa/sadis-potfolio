import Projects from "../components/Projects";
import SideBar from "../components/SideBar";

function ProjectsPage() {
  return (
    <div className="flex w-full min-h-screen">
      <SideBar />
      <Projects />
    </div>
  );
}

export default ProjectsPage;