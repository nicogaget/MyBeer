import "./App.css";
import BeerDetails from "./features/beers/beer-details/BeerDetails";
import BeerList from "./features/beers/beer-list/BeerList";
import { Navbar } from "./components";
function App() {
  return (
    <div className="App d-flex flex-column">
      <Navbar />
      <div className=" d-flex flex-row flex-fill pt-4 p-2">
        <BeerList />
        <BeerDetails />
      </div>
    </div>
  );
}

export default App;
