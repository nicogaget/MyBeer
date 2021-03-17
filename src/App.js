import "./App.css";
import BeerDetails from "./features/beers/beer-details/BeerDetails";
import BeerList from "./features/beers/beer-list/BeerList";
import { Navbar } from "./components";
import { Component } from "react";
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      beers:[{
        name: 'Leffe La Légère',
        img:'https://d33za54wpumlhy.cloudfront.net/eyJidWNrZXQiOiJzYXZldXJiaWVyZSIsImtleSI6ImltZy9wLzM1MDI5LTUyNzEzLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODB9LCJwbmciOnsicXVhbGl0eSI6ODB9LCJyZXNpemUiOnsid2lkdGgiOjc4NiwiaGVpZ2h0Ijo1NDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjAsImciOjAsImIiOjAsImFscGhhIjowfX19fQ==',
        details: '5° alc | blonde',
        description:"Robe jaune dorée coiffée d'une épaisse mousse blanche onctueuse."
      }],
      selectedBeer:0
    }
  }
  render(){
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
  
}

export default App;
