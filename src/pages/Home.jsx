import { Hero } from "../components/Hero.jsx";
import { AboutPreview } from "../components/sections/AboutPreview.jsx";
import { Skills } from "../components/sections/Skills.jsx";
import { Services } from "../components/sections/Services.jsx";
import { FeaturedProjects } from "../components/sections/FeaturedProjects.jsx";
import { Process } from "../components/sections/Process.jsx";
import { Experience } from "../components/sections/Experience.jsx";
// import { Testimonials } from "../components/sections/Testimonials.jsx";
import { ContactCTA } from "../components/sections/ContactCTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Skills />
      <Services />
      <FeaturedProjects />
      <Process />
      <Experience />
      {/* <Testimonials /> */}
      <ContactCTA />
    </>
  );
}
