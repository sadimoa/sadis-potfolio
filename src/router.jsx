import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Pages/AboutPage.jsx";
import Contact from "./Pages/ContactPage.jsx";
import Projects from "./Pages/ProjectsPage.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
]);