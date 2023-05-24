import Navbar from "./componats/nav-bar";
import SectionHeader from "./componats/sections-head";
import Item from "./componats/item";
import Dotted from "./componats/dotted";
import Descount from "./componats/descount";
import Sprites from "./componats/sprites";
import Product from "./componats/product";
import Details from "./componats/details";
import Client from "./componats/clients";
import Footer from "./componats/footer";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <img
            src="images/main-banner-1-1600x700.jpg"
            className="w-100"
            alt="slider"
          />
        </div>
      </section>
      <SectionHeader title="cateagory section" />
      <div className="container">
        <section className="cateagory-items py-3 row  justify-content-center align-items-center">
          <Item title="modern chair colection" subtitle="most populer" />
          <Item title="modern chair colection" subtitle="most populer" />
          <Item title="modern chair colection" subtitle="most populer" />
          <Item title="modern chair colection" subtitle="most populer" />
        </section>
        <Dotted />
        <SectionHeader title="descount section" />
        <Descount />
        <Sprites />
        <hr />
        <SectionHeader title="Product Section" />
        <Product />
        <Details />
        <Client />
      </div>
      <Footer />
    </>
  );
}

export default App;
