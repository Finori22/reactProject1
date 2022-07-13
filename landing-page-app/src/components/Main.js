import Specialist from "./subComponents/specialist";
import "./CSS/main.css";

const Main = () => {
  return (
    <main class="main-section" id="aboutUsSection">
      <div class="main-container">
        <h1 class="title-main">Our specialists</h1>
        <Specialist />
        <Specialist />
      </div>
    </main>
  );
};
export default Main;
