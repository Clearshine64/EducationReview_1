import logo from "../images/nw-lgo-stcky@2x.png";

function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between App-header-mobile">
          <div className="">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="">
              <div className="buttons text-center">
                  <button className="btn btn-primary">Login</button>
                  <button className="btn btn-info">Register</button>
              </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
