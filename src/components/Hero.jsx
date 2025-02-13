const Hero = () => {
  return (
    <div className="min-h-screen ml-20  bg-[#1d1d1d] text-white w-full">
      <div className="container gap-6 pl-10 justify-center mx-auto flex flex-col h-full">
        <h1 className="font-bold md:text-8xl text-2xl">
          Hi <br />
          I am Sadia <br />
          Web Developer
        </h1>
        <p className="text-[#6f6f6f]  md:tracking-[0.3rem] font-medium md:uppercase">
          Full Stack Web Application Developer
        </p>
        <button className="bg-[#2d2d2d] py-2 w-fit rounded px-5 font-medium">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
