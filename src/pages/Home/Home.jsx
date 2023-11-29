import Banner from "./Banner/Banner";
import BecomeTeacher from "./Become-Teacher/BecomeTeacher";
import HighClass from "./HighClass";
import Partners from "./Partners/Partners";
import Pricing from "./Pricing/Pricing";
import Team from "./Team/Team";
import Stats from "./stats/Stats";

const Home = () => {
  return (
    <div>
      <Banner />
      <Partners />
      <HighClass />
      <BecomeTeacher />
      <Stats />
      <Pricing />
      <Team />
    </div>
  );
};

export default Home;
