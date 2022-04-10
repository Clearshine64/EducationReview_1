import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import client from "../images/client.png";

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
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="row top-card d-flex align-items-center">
                  <div className="col-3">
                    <img src={client} alt="new"/>
                  </div>
                  <div className="col-6">
                    <h2>Mark Twain</h2>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span className="rate">(4.5)</span>
                  </div>
                </div>
                <h3>Avesome Experience</h3>
                <div className="quote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.505"
                    height="24.164"
                    viewBox="0 0 28.505 24.164"
                  >
                    <g id="quote" transform="translate(0.286 0.008)">
                      <path
                        id="Path_6241"
                        data-name="Path 6241"
                        d="M8.507,7.174A6.639,6.639,0,0,1,15.138,13.8v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369A6.63,6.63,0,1,1,8.508,7.171Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.219-7.311,5.547-12.891,5.425-15.048a1.715,1.715,0,0,1,0-.2Z"
                        transform="translate(13.057 -7.177)"
                        fill="#ff723a"
                      />
                      <path
                        id="Path_6242"
                        data-name="Path 6242"
                        d="M45.694,7.175a6.639,6.639,0,0,1,6.631,6.632v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369a6.63,6.63,0,1,1,.314-13.257Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.218-7.311,5.546-12.891,5.426-15.048a1.715,1.715,0,0,1-.005-.2Z"
                        transform="translate(-39.192 -7.179)"
                        fill="#ff723a"
                      />
                    </g>
                  </svg>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te
                  </p>
                
                </div>
                <div className="footer-note">
                    <b>Published 20.08.2018</b>
                    <button className="btn btn-primary">Read review <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card">
              <div className="card-body">
                <div className="row top-card d-flex align-items-center">
                  <div className="col-3">
                    <img src={client} alt="new"/>
                  </div>
                  <div className="col-6">
                    <h2>Mark Twain</h2>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span className="rate">(4.5)</span>
                  </div>
                </div>
                <h3>Avesome Experience</h3>
                <div className="quote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.505"
                    height="24.164"
                    viewBox="0 0 28.505 24.164"
                  >
                    <g id="quote" transform="translate(0.286 0.008)">
                      <path
                        id="Path_6241"
                        data-name="Path 6241"
                        d="M8.507,7.174A6.639,6.639,0,0,1,15.138,13.8v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369A6.63,6.63,0,1,1,8.508,7.171Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.219-7.311,5.547-12.891,5.425-15.048a1.715,1.715,0,0,1,0-.2Z"
                        transform="translate(13.057 -7.177)"
                        fill="#ff723a"
                      />
                      <path
                        id="Path_6242"
                        data-name="Path 6242"
                        d="M45.694,7.175a6.639,6.639,0,0,1,6.631,6.632v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369a6.63,6.63,0,1,1,.314-13.257Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.218-7.311,5.546-12.891,5.426-15.048a1.715,1.715,0,0,1-.005-.2Z"
                        transform="translate(-39.192 -7.179)"
                        fill="#ff723a"
                      />
                    </g>
                  </svg>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te
                  </p>
                
                </div>
                <div className="footer-note">
                    <b>Published 20.08.2018</b>
                    <button className="btn btn-primary">Read review <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card">
              <div className="card-body">
                <div className="row top-card d-flex align-items-center">
                  <div className="col-3">
                    <img src={client} alt="new"/>
                  </div>
                  <div className="col-6">
                    <h2>Mark Twain</h2>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span className="rate">(4.5)</span>
                  </div>
                </div>
                <h3>Avesome Experience</h3>
                <div className="quote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.505"
                    height="24.164"
                    viewBox="0 0 28.505 24.164"
                  >
                    <g id="quote" transform="translate(0.286 0.008)">
                      <path
                        id="Path_6241"
                        data-name="Path 6241"
                        d="M8.507,7.174A6.639,6.639,0,0,1,15.138,13.8v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369A6.63,6.63,0,1,1,8.508,7.171Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.219-7.311,5.547-12.891,5.425-15.048a1.715,1.715,0,0,1,0-.2Z"
                        transform="translate(13.057 -7.177)"
                        fill="#ff723a"
                      />
                      <path
                        id="Path_6242"
                        data-name="Path 6242"
                        d="M45.694,7.175a6.639,6.639,0,0,1,6.631,6.632v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369a6.63,6.63,0,1,1,.314-13.257Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.218-7.311,5.546-12.891,5.426-15.048a1.715,1.715,0,0,1-.005-.2Z"
                        transform="translate(-39.192 -7.179)"
                        fill="#ff723a"
                      />
                    </g>
                  </svg>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te
                  </p>
                
                </div>
                <div className="footer-note">
                    <b>Published 20.08.2018</b>
                    <button className="btn btn-primary">Read review <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="row top-card d-flex align-items-center">
                  <div className="col-3">
                    <img src={client} alt="new"/>
                  </div>
                  <div className="col-6">
                    <h2>Mark Twain</h2>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span className="rate">(4.5)</span>
                  </div>
                </div>
                <h3>Avesome Experience</h3>
                <div className="quote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.505"
                    height="24.164"
                    viewBox="0 0 28.505 24.164"
                  >
                    <g id="quote" transform="translate(0.286 0.008)">
                      <path
                        id="Path_6241"
                        data-name="Path 6241"
                        d="M8.507,7.174A6.639,6.639,0,0,1,15.138,13.8v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369A6.63,6.63,0,1,1,8.508,7.171Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.219-7.311,5.547-12.891,5.425-15.048a1.715,1.715,0,0,1,0-.2Z"
                        transform="translate(13.057 -7.177)"
                        fill="#ff723a"
                      />
                      <path
                        id="Path_6242"
                        data-name="Path 6242"
                        d="M45.694,7.175a6.639,6.639,0,0,1,6.631,6.632v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369a6.63,6.63,0,1,1,.314-13.257Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.218-7.311,5.546-12.891,5.426-15.048a1.715,1.715,0,0,1-.005-.2Z"
                        transform="translate(-39.192 -7.179)"
                        fill="#ff723a"
                      />
                    </g>
                  </svg>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te
                  </p>
                
                </div>
                <div className="footer-note">
                    <b>Published 20.08.2018</b>
                    <button className="btn btn-primary">Read review <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card">
              <div className="card-body">
                <div className="row top-card d-flex align-items-center">
                  <div className="col-3">
                    <img src={client} alt="new"/>
                  </div>
                  <div className="col-6">
                    <h2>Mark Twain</h2>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span className="rate">(4.5)</span>
                  </div>
                </div>
                <h3>Avesome Experience</h3>
                <div className="quote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.505"
                    height="24.164"
                    viewBox="0 0 28.505 24.164"
                  >
                    <g id="quote" transform="translate(0.286 0.008)">
                      <path
                        id="Path_6241"
                        data-name="Path 6241"
                        d="M8.507,7.174A6.639,6.639,0,0,1,15.138,13.8v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369A6.63,6.63,0,1,1,8.508,7.171Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.219-7.311,5.547-12.891,5.425-15.048a1.715,1.715,0,0,1,0-.2Z"
                        transform="translate(13.057 -7.177)"
                        fill="#ff723a"
                      />
                      <path
                        id="Path_6242"
                        data-name="Path 6242"
                        d="M45.694,7.175a6.639,6.639,0,0,1,6.631,6.632v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369a6.63,6.63,0,1,1,.314-13.257Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.218-7.311,5.546-12.891,5.426-15.048a1.715,1.715,0,0,1-.005-.2Z"
                        transform="translate(-39.192 -7.179)"
                        fill="#ff723a"
                      />
                    </g>
                  </svg>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te
                  </p>
                
                </div>
                <div className="footer-note">
                    <b>Published 20.08.2018</b>
                    <button className="btn btn-primary">Read review <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card">
              <div className="card-body">
                <div className="row top-card d-flex align-items-center">
                  <div className="col-3">
                    <img src={client} alt="new"/>
                  </div>
                  <div className="col-6">
                    <h2>Mark Twain</h2>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span className="rate">(4.5)</span>
                  </div>
                </div>
                <h3>Avesome Experience</h3>
                <div className="quote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.505"
                    height="24.164"
                    viewBox="0 0 28.505 24.164"
                  >
                    <g id="quote" transform="translate(0.286 0.008)">
                      <path
                        id="Path_6241"
                        data-name="Path 6241"
                        d="M8.507,7.174A6.639,6.639,0,0,1,15.138,13.8v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369A6.63,6.63,0,1,1,8.508,7.171Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.219-7.311,5.547-12.891,5.425-15.048a1.715,1.715,0,0,1,0-.2Z"
                        transform="translate(13.057 -7.177)"
                        fill="#ff723a"
                      />
                      <path
                        id="Path_6242"
                        data-name="Path 6242"
                        d="M45.694,7.175a6.639,6.639,0,0,1,6.631,6.632v.033c0,.022,0,.053.005.1.136,2.406-.258,8.911-6.837,17.244a.405.405,0,0,1-.7-.382c.019-.053,1.818-5.441.588-10.369a6.63,6.63,0,1,1,.314-13.257Zm5.822,6.609a5.822,5.822,0,1,0-5.822,5.845.4.4,0,0,1,.39.3,19.9,19.9,0,0,1,.012,9.105c5.218-7.311,5.546-12.891,5.426-15.048a1.715,1.715,0,0,1-.005-.2Z"
                        transform="translate(-39.192 -7.179)"
                        fill="#ff723a"
                      />
                    </g>
                  </svg>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te
                  </p>
                
                </div>
                <div className="footer-note">
                    <b>Published 20.08.2018</b>
                    <button className="btn btn-primary">Read review <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
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
