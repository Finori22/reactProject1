import "../CSS/singleOffer.css";

const SingleOffer = (props) => {
  return props.isNew ? (
    <div class="offer dot-parent">
      <div class="dot"></div>
      <div class="offer-content-wrapper">
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <p>{props.isNew ? "Brand new" : "Standard but excellent"}</p>
      </div>
    </div>
  ) : (
    <div class="offer">
      <div class="offer-content-wrapper">
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <p>{props.isNew ? "Brand new" : "Standard but excellent"}</p>
      </div>
    </div>
  );
};
export default SingleOffer;
