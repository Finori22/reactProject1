import "../CSS/nav.css";

const Nav = () => {
  return (
    <nav class="navbar">
      <div class="container">
        <h1 class="title">Our company</h1>
        <div class="menu-wrapper">
          <ul class="menu">
            <li>
              <a href="#aboutUsSection">About us</a>
            </li>
            <li>
              <a href="#offerSection">Offer</a>
            </li>
            <li>
              <a class="disabled" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
