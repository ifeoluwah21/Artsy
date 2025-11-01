import "./App.css";
import Carousel from "./components/Carousel";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Upcoming from "./components/Upcoming";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Upcoming />
      <Featured />
    </>
  );
}

export default App;
