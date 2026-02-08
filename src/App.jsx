import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;