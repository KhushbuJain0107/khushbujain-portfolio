import Navbar from "./components/layout/Navbar";

import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Tools from "./sections/Tools/Tools";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Tools />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;