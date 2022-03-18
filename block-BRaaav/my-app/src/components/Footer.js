import {footerData} from "../data/profileData";

function Footer() {
  return (
    <footer className="footer padding">
      <div className="container">
        <div className="flex align-start">
          <div className="flex-40">
            <h3>Hydro Company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              veniam autem illo recusandae sit velit adipisci ab perspiciatis
              voluptate. Eos fuga soluta necessitatibus provident ad culpa
              explicabo quod error maxime!
            </p>
          </div>
          {footerData.map((one, i) => {
            return <CreateFooterElement key={i} {...one} />
          })}
          <div className="flex-20">
            <h3>Find Us</h3>
            <address>
              AltCampus, Thehr, Khaniyara,
              <br />
              Kangra, Himachal Pradesh, 176218
            </address>
          </div>
        </div>
        <hr />
        <div className="flex footer-additional-info">
          <small> Copyright &copy; 2017 Your Company </small>
          <div className="flex">
            <p>Call us (+66) 010-020-0340</p>
            <nav>
              <ul className="flex">
                <li className="social-media-item">
                  <a href="#"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li className="social-media-item">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </li>
                <li className="social-media-item">
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}


function CreateFooterElement(props) {
  return (
    <div className="flex-20">
            <h3>{props.h3}</h3>
            <nav>
              <ul>
                <li>
                  <a href="#">{props.first}</a>
                </li>
                <li>
                  <a href="#">{props.second}</a>
                </li>
                <li>
                  <a href="#">{props.third}</a>
                </li>
                <li>
                  <a href="#">{props.forth}</a>
                </li>
              </ul>
            </nav>
          </div>
  )
}

export default Footer;