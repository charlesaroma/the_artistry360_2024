import NavBar from "../1.Navigation/1.navbar.jsx";
import Hero from "./2.Hero.jsx";
import SliderSection from "./3.SliderSection.jsx";
import Welcome from "./4.Welcome.jsx";
import News from "./5.NewAndEvents";

const Home = () => {
  return (
    <div className="relative w-full h-full overflow-x-hidden">
      {/* Navigation Bar */}
      <NavBar />

      {/* Page Sections */}
      <div className="w-full h-full flex flex-col space-y-0">
        <Hero />
        {/* Adding id to the SliderSection */}
        <div id="slider-section">
          <SliderSection />
        </div>
        <Welcome />
        <News />
      </div>
    </div>
  );
};

export default Home;
