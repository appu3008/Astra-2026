import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Splash from "./components/Splash.jsx";
import Winners from "./components/Winners.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Eligibility from "./components/Eligibility.jsx";
import Prizes from "./components/Prizes.jsx";
import ExamPattern from "./components/ExamPattern.jsx";
import Instructions from "./components/Instructions.jsx";
import Contact from "./components/Contact.jsx";
import SectionDivider from "./components/SectionDivider.jsx";
import useReveal from "./hooks/useReveal.js";

export default function App() {
  useReveal(1700);

  if (window.location.pathname.startsWith("/winners")) return <Winners />;

  return (
    <>
      <Splash />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider from="navy" to="paper" />
        <About />
        <SectionDivider from="paper" to="navy" />
        <Eligibility />
        <SectionDivider from="navy" to="paper" />
        <Prizes />
        <SectionDivider from="paper" to="navy" />
        <ExamPattern />
        <SectionDivider from="navy" to="paper" />
        <Instructions />
        <SectionDivider from="paper" to="navy" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
