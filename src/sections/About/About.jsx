import AboutHeader from "./AboutHeader";
import AboutIntro from "./AboutIntro";
import AboutCarousel from "./AboutCarousel";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-5xl mx-auto">
        <AboutHeader />
        <AboutIntro />
        <AboutCarousel />
      </div>
    </section>
  );
};

export default About;