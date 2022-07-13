import "./CSS/footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <h2>It company - all the rights reseved, 2022</h2>
        <div class="icons">
          <FaInstagramSquare size="40px" />
          <BsFacebook size="40px" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
