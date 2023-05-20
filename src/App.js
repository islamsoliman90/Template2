import Navbar from "./componats/nav-bar";
import SectionHeader from "./componats/sections-head";
import Item from "./componats/item";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <div class="container">
          <img
            src="images/main-banner-1-1600x700.jpg"
            className="w-100"
            alt="slider"
          />
        </div>
      </section>
      <SectionHeader title="cateagory section" />
      <div className="container">
        <section class="cateagory-items row gap-3">
          <Item title="modern chair colection" subtitle="most populer" />
          <Item title="modern chair colection" subtitle="most populer" />
          <Item title="modern chair colection" subtitle="most populer" />
          <Item title="modern chair colection" subtitle="most populer" />
        </section>
      </div>
    </>
  );
}

export default App;
