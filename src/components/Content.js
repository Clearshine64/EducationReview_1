import headerImage from "../images/header-image.svg";

function Content() {
  return (
    <main className="App-content">
      <div className="row d-flex align-items-center">
        <div className="col-md-5">
          <img src={headerImage} className="App-logo" alt="logo" />
        </div>
        <div className="col-md-6">
          <div className="content-header">
            <h1>Every Review is an</h1>
            <h1>Experience!</h1>
            <p>Reviews from pre kindergarten to post adulthood education.</p>
            <div className="content-search">
              <input
                className="form-control"
                placeholder="What are you looking For...."
              />
              <button className="btn btn-primary"> <i class="fa fa-search" aria-hidden="true"></i>  Search</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
