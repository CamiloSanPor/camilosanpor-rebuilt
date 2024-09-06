import "./app.css";
import NavBar from "./components/NavBar/NavBar";
import HeroImage from "./components/HeroImage/HeroImage";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <NavBar />
      <HeroImage />
      <AboutMe />
      <Footer />
    </main>
  );
}

export default App;
