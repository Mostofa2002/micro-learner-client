import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src="https://store.hp.com/app/assets/images/uploads/prod/top-25-free-online-courses1595277475105838.jpg" />
      </div>
      <div>
        <img src="https://images.theconversation.com/files/339942/original/file-20200604-67393-1dej576.jpg?ixlib=rb-1.1.0&rect=1%2C82%2C997%2C498&q=45&auto=format&w=1356&h=668&fit=crop" />
      </div>
      <div>
        <img src="https://www.advanceitbd.com/wp-content/uploads/2020/04/online-courses.jpg" />
      </div>
      <h1>hello</h1>
    </Carousel>
  );
};

export default Banner;
