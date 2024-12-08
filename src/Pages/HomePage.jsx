import Hero from "../components/hero/Hero";
import Serve from "../components/serve/Serve";
import HowItWorks from "../components/work/Work";
import WhyChoose from "../components/choose/Choose";
import Navbar from "../components/navbar/Navbar";

function HomePage() {
  return (
    <>
      <Hero/>
      <Serve/>
      <HowItWorks/>
      <WhyChoose/>
    </>
  );
}

export default HomePage;
