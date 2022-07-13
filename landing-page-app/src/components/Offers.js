import SingleOffer from "./subComponents/SingleOffer";
import "./CSS/offers.css";

const Offers = () => {
  const offers = [
    {
      name: "Making your website",
      price: "$1000",
      isNew: true,
    },
    {
      name: "Cloud Services",
      price: "$3500",
      isNew: true,
    },
    {
      name: "It team outsourcing",
      price: "$200000",
      isNew: true,
    },
    {
      name: "Hosting your app",
      price: "$100",
      isNew: false,
    },
    {
      name: "Buying a domain",
      price: "$250",
      isNew: false,
    },
    {
      name: "A free smile",
      price: "$0",
      isNew: false,
    },
  ];
  return (
    <section class="offers-section" id="offerSection">
      <div class="offers-section-container">
        <h1 class="offers-title">What our company does?</h1>
        <div class="offers-display">
          {offers.map((offer) => (
            <SingleOffer
              name={offer.name}
              price={offer.price}
              isNew={offer.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Offers;
