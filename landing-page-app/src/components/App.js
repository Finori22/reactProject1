import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./CSS/app.css";
import Offers from "./Offers";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Main />
      <Offers />
      <Footer />
    </div>
  );
};
export default App;
