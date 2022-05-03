import "./App.css";
import { AboutUs, Navbar, SpecialMenu } from "./components";
import { Header } from "./container";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  );
}

export default App;
