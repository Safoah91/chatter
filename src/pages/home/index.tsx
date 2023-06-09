import { FC } from "react";
import About from "./components/about";
import Hero from "./components/hero";
import Join from "./components/join";
import GetStartedCta from "./components/getStartedCta";
import Testimonies from "./components/testimonies";

const Home: FC<{}> = () => {
  return (
    <div>
      <Hero />
      <About />
      <Join />
      <Testimonies />
      <GetStartedCta />
    </div>
  );
};

export default Home;
