const HeroSimple = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white w-full flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-xl"></div>

      <div className="container gap-8 pl-10 justify-center mx-auto flex flex-col h-full relative z-10 max-w-4xl">
        {/* Main heading */}
        <div>
          <h1 className="font-bold text-4xl md:text-8xl heading-primary mb-6">
            <span className="block">Hi</span>
            <span className="block">I am <span className="text-gradient">Sadia</span></span>
            <span className="block relative">
              Web Developer
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="relative">
          <div className="glass p-4 rounded-xl max-w-fit">
            <p className="text-gray-300 md:tracking-[0.3rem] font-medium md:uppercase text-sm md:text-base">
              Full Stack Web Application Developer
            </p>
          </div>
        </div>

        {/* CTA button */}
        <div>
          <button className="btn-modern magnetic-btn">
            Hire Me
            <span className="ml-2 inline-block">→</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-8">
          {['GitHub', 'LinkedIn', 'Twitter'].map((platform, index) => (
            <div
              key={platform}
              className="glass p-3 rounded-full cursor-pointer glow"
            >
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 text-8xl opacity-10 select-none">
        ⚡
      </div>
    </div>
  );
};

export default HeroSimple;
