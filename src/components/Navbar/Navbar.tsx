import "./navbar.scss";
import facebook from "./../../assets/facebook.png";
import mentor from "./../../assets/images.png";
import github from "./../../assets/github.png";
import linkedin from "./../../assets/linkedin.png";
import Sidebar from "./Sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="wrapper">
        <Sidebar />
      </div>
      <div className="social">
        <ul>
          <li>
            <a href="https://github.com/MennaBashir" target="_blank">
              <img src={github} alt="notFound" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/menna-bashir/" target="_blank">
              <img src={linkedin} alt="notFound" />
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/MennaBashir"
              target="_blank"
            >
              <img className="mentor" src={mentor} alt="notFound" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100052015898848"
              target="_blank"
            >
              <img className="mentor" src={facebook} alt="notFound" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
