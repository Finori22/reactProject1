import "../CSS/specialist.css";

const Specialist = (props) => {
  return (
    <div class="specialist-container">
      <img src={props.photoUrl} class="profile" alt="Jonny Nowak"></img>
      <div class="specialist-description">
        <h2>
          {props.name} ({props.position})
        </h2>
        <p>{props.about}</p>
      </div>
    </div>
  );
};
export default Specialist;
