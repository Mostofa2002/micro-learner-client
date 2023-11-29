import { Link } from "react-router-dom";

const BecomeTeacher = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://www.usnews.com/object/image/00000142-9263-d33c-abc6-ff77dfba0024/37985FE_DA_20130207_onlinemistakes-slide8.jpg?update-time=1421878595148&size=responsive640"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div className="lg:ml-48">
            <h1 className="text-5xl font-bold">
              Become a teacher of this website
            </h1>
            <p className="py-6">
              Micro Learner: Elevate your knowledge with bite-sized lessons.
              Explore a world of compact, impactful learning modules designed
              for quick absorption. Unlock new skills effortlessly on Micro
              Learn!
            </p>
            <Link to="/teach">
              <button className="btn btn-primary">Start teaching</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeTeacher;
