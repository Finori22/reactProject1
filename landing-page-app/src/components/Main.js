import Specialist from "./subComponents/specialist";
import "./CSS/main.css";

const employees = [
  {
    name: "Jonny Nowak",
    position: "Senior React Developer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
    photoUrl: "/specialist-1.jpg",
  },
  {
    name: "Antony Donat",
    position: "Regular .Net Engineer",
    about:
      "Lorem ipsum dolor sisfsdfds, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
    photoUrl: "/specialist-2.jpg",
  },
];

const Main = () => {
  return (
    <main class="main-section" id="aboutUsSection">
      <div class="main-container">
        <h1 class="title-main">Our specialists</h1>
        {employees.map((employee) => (
          <Specialist
            name={employee.name}
            position={employee.position}
            about={employee.about}
            photoUrl={employee.photoUrl}
          />
        ))}
      </div>
    </main>
  );
};
export default Main;
