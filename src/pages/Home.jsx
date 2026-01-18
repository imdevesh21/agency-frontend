import AgencyNavbar from "../component/AgencyNavbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Work from "../sections/Work";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import Blog from "../sections/Blog";

import "../styles/hero.css";
import "../styles/sections.css";

export default function Home() {
  return (
    <>
      <AgencyNavbar />
      <Hero />
      <About />
      <Work />
      <Services />
      <Contact />
      <Blog />
    </>
  );
}
