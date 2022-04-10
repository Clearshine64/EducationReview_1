
import Slider from "./Slider";
import teacher from "../images/teacher.png";

function Activity() {
  return (
    <div className="activity">
          <div className="bg-image">

          <h1>Latest Reviews</h1>
          <div className="divider">
            <span className="divider-space-left"></span>
            <img src={teacher} className="App-logo" alt="logo" />
            <span className="divider-space-right"></span>

          </div>
          <p>Read reviews detailed experiences from people like you</p>

        <Slider />
          </div>
        </div>
  );
}

export default Activity;
