import ProjectList from "../components/ProjectList";

const Projects = () => {
  return (
    <div className="min-h-screen my-10 ml-20 bg-[#1d1d1d] text-white flex flex-col gap-5  justify-center px-6 md:px-12">
      <div className="space-y-6">
        <h3 className="text-3xl md:text-6xl font-extrabold text-[#00ffff]">
          Recent Work
        </h3>
        <p className="md:max-w-170 max-w-fit ">
          I have curated a small selection of recent projects that showcase the
          diverse range of work I have been a part of. However, this is merely a
          glimpse into my portfolio, and I invite you to explore my work page.
        </p>
      </div>
      <ProjectList />
      <button className="bg-[#333] w-fit text-white py-2 px-4 rounded hover:bg-[#444]">
        View All Projects
      </button>
    </div>
  );
};

export default Projects;
