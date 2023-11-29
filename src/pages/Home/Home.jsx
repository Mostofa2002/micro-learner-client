import Banner from "./Banner/Banner";
import BecomeTeacher from "./Become-Teacher/BecomeTeacher";
import HighClass from "./HighClass";
import Partners from "./Partners/Partners";
import Team from "./Team/Team";

const Home = () => {
  // const isLoading = true;
  // if (isLoading) {
  //   return <progress className="progress w-56"></progress>;
  // }
  return (
    <div>
      <Banner />
      <Partners />
      <HighClass />
      <BecomeTeacher />
      <Team />
    </div>
  );
};

export default Home;
