import "./App.css";
import {
  AboutUs,
  Chef,
  Gallery,
  Intro,
  Laurels,
  Navbar,
  SpecialMenu,
} from "./components";
import { Header } from "./container";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
    </div>
  );
}

export default App;
