import AboutNew from "../components/AboutNew";
import ContactNew from "../components/ContactNew";
import Hero from "../components/Hero";
// import HeroSimple from "../components/HeroSimple";
import ProjectsNew from "../components/ProjectsNew";
import FloatingNav from "../components/FloatingNav";

const HomePage = () => {
  return (
    <div className="w-full">
      <FloatingNav />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutNew />
      </section>
      <section id="projects">
        <ProjectsNew />
      </section>
      <section id="contact">
        <ContactNew />
      </section>
    </div>
  );
};

export default HomePage;
