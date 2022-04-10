import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import kids from "../images/kids.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Slider() {
  return (
    <main className="App-Slider">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        showThumbs={false}
        responsive={responsive}
      >
        <div className="row TopCategories">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row TopCategories">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={kids} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-xs">112 Results</button>
                <div className="content-text-cat">
                  <h3>Pre k</h3>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te Et
                    nec tantas accusamus salutatus
                  </p>
                </div>
                <div className="content-footer-cat">
                  <i className="fa fa-comment"></i>
                  <span>546 Reviews</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </main>
  );
}

export default Slider;
