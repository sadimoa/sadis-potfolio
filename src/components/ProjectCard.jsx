const ProjectCard = ({ image, title }) => (
    <li className="bg-[#2d2d2d] rounded w-fit h-fit flex flex-col items-center gap-3 py-3 px-2 justify-center">
      <img className="w-100 h-80" src={image} alt={title} />
      <div className="flex items-center justify-center gap-2">
        <p className="font-bold">{title}</p>
        <button className="cursor-pointer bg-[#00ffff] text-black py-2 w-fit rounded px-5 font-medium">
          Source Code
        </button>
        <button className="cursor-pointer bg-[#00ffff] text-black py-2 w-fit rounded px-5 font-medium">
          Preview Demo
        </button>
      </div>
    </li>
  );
  
  export default ProjectCard;
  