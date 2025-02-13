import Contact from "../components/Contact";
import SideBar from "../components/SideBar";

const ContactPage = () => {
  return (
    <div className="flex w-full min-h-screen">
      <SideBar />
      <Contact />
    </div>
  );
};

export default ContactPage;
