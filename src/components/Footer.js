import logo from "../images/nw-lgo-stcky@2x.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-3">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-md-3">
            <h3>Links</h3>
          </div>
          <div className="col-md-3">
            <h3>Categories</h3>
          </div>
          <div className="col-md-3">
            <h3>Disclaimer</h3>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-3">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed di
              nonumy eirmod temporinvi dunt ut labore.
            </p>
            <div className="social">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i> About us
              </li>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i> Partners
              </li>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i> FAQ’s
              </li>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i> Sign Up
              </li>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i> Contacts
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i> Pre K
              </li>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i> K-12
              </li>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i> University
              </li>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i> Tafe
              </li>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i> Private
              </li>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i> Alternative
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li className="li-last">
                <i class="fa fa-home" aria-hidden="true"></i> Education Reviewed is here to provide unbiased information and
                experiences on education providers
              </li>
              <li className="li-last">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                info@educationreviewed.com.au
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="created_by">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-3">
                <p>Education Reviewed by KPVE PTY LTD</p>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3">
            <p>Terms and conditions     |   Privacy</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
