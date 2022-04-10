import SliderCat from "./SliderCat";
import teacher from "../images/teacher.png";

function TopCategories() {
  return (
    <div className="activity topcategories">
          <div className="">

          <h1>Top Categories</h1>
          <div className="divider">
            <span className="divider-space-left"></span>
            <img src={teacher} className="App-logo" alt="logo" />
            <span className="divider-space-right"></span>

          </div>
          <p>Read reviews detailed experiences from people like you</p>

          </div>
          <SliderCat />
          
        </div>
  );
}

export default TopCategories;
