import "./App.css";
import BeerDetails from "./features/beers/beer-details/BeerDetails";
import BeerList from "./features/beers/beer-list/BeerList";
import { Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex flex-row">
        <BeerList />
        <BeerDetails />
      </div>
    </div>
  );
}

export default App;
