import { Outlet } from "react-router-dom";
import Nav from "../../pages/Nav/Nav";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
