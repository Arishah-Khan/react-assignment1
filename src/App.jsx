import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";

function App() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Header />
      <HeroSection/>
      <AboutUs />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
