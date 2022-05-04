import "./App.css";
import {
  AboutUs,
  Chef,
  Intro,
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
    </div>
  );
}

export default App;
