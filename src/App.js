import "./App.css";
import BeerDetails from "./features/beers/beer-details/BeerDetails";
import BeerList from "./features/beers/beer-list/BeerList";
import { Navbar } from "./components";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [
        {
          name: "Leffe La Légère",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_StY6dI5YD9oMiE7M5Wu7jkcq2NuBUNaGTc6gsDB4s9edkQ-RBEP8nyg8bvM&usqp=CAc",
          details: "5° alc | blonde",
          description:
            "Robe jaune dorée coiffée d'une épaisse mousse blanche onctueuse.",
        },
        {
          name: "Leffe  Légère",
          img:
            "https://d33za54wpumlhy.cloudfront.net/eyJidWNrZXQiOiJzYXZldXJiaWVyZSIsImtleSI6ImltZy9wLzM1MDI5LTUyNzEzLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODB9LCJwbmciOnsicXVhbGl0eSI6ODB9LCJyZXNpemUiOnsid2lkdGgiOjc4NiwiaGVpZ2h0Ijo1NDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjAsImciOjAsImIiOjAsImFscGhhIjowfX19fQ==",
          details: "5° alc | blonde",
          description:
            "Robe jaune dorée coiffée d'une épaisse mousse blanche onctueuse.",
        },
        {
          name: "Leffe La Légère",
          img:
            "https://d33za54wpumlhy.cloudfront.net/eyJidWNrZXQiOiJzYXZldXJiaWVyZSIsImtleSI6ImltZy9wLzM1Nzk3LTU0NDk0LmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODB9LCJwbmciOnsicXVhbGl0eSI6ODB9LCJyZXNpemUiOnsid2lkdGgiOjc4NiwiaGVpZ2h0Ijo1NDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjAsImciOjAsImIiOjAsImFscGhhIjowfX19fQ==",
          details: "5° alc | blonde",
          description:
            "Robe jaune dorée coiffée d'une épaisse mousse blanche onctueuse.",
        },
        {
          name: "Leffe La Légère",
          img:
            "https://d33za54wpumlhy.cloudfront.net/eyJidWNrZXQiOiJzYXZldXJiaWVyZSIsImtleSI6ImltZy9wLzM1MDI5LTUyNzEzLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODB9LCJwbmciOnsicXVhbGl0eSI6ODB9LCJyZXNpemUiOnsid2lkdGgiOjc4NiwiaGVpZ2h0Ijo1NDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjAsImciOjAsImIiOjAsImFscGhhIjowfX19fQ==",
          details: "5° alc | blonde",
          description:
            "Robe jaune dorée coiffée d'une épaisse mousse blanche onctueuse.",
        },
        {
          name: "La Légère",
          img:
            "https://d33za54wpumlhy.cloudfront.net/eyJidWNrZXQiOiJzYXZldXJiaWVyZSIsImtleSI6ImltZy9wLzM1MDI5LTUyNzEzLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODB9LCJwbmciOnsicXVhbGl0eSI6ODB9LCJyZXNpemUiOnsid2lkdGgiOjc4NiwiaGVpZ2h0Ijo1NDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjAsImciOjAsImIiOjAsImFscGhhIjowfX19fQ==",
          details: "5° alc | brune",
          description:
            "Robe jaune dorée coiffée d'une épaisse mousse blanche onctueuse.",
        },
        {
          name: "Leffe La Légère",
          img:
            "https://d33za54wpumlhy.cloudfront.net/eyJidWNrZXQiOiJzYXZldXJiaWVyZSIsImtleSI6ImltZy9wLzgxODMtNTQ3MzIuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo4MH0sInBuZyI6eyJxdWFsaXR5Ijo4MH0sInJlc2l6ZSI6eyJ3aWR0aCI6Nzg2LCJoZWlnaHQiOjU0MCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MCwiZyI6MCwiYiI6MCwiYWxwaGEiOjB9fX19",
          details: "5° alc | blonde",
          description:
            "Robe jaune dorée coiffée d'une épaisse mousse blanche onctueuse.",
        },
        {
          name: "Leffe La Légère",
          img:
            "https://d33za54wpumlhy.cloudfront.net/eyJidWNrZXQiOiJzYXZldXJiaWVyZSIsImtleSI6ImltZy9wLzM1MDI5LTUyNzEzLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODB9LCJwbmciOnsicXVhbGl0eSI6ODB9LCJyZXNpemUiOnsid2lkdGgiOjc4NiwiaGVpZ2h0Ijo1NDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjAsImciOjAsImIiOjAsImFscGhhIjowfX19fQ==",
          details: "5° alc | blonde",
          description:
            "Robe jaune dorée coiffée d'une épaisse mousse blanche onctueuse.",
        },
      ],
      selectedBeer: 0,
    };
  }

  updateSelectedBeer = (name) => {
    const index = this.state.beers.findIndex((b) => {
      return name === b.name;
    });
    this.setState({
      selectedBeer: index,
    });
  };

  render() {
    return (
      <div className="App d-flex flex-column">
        <Navbar />
        <div className=" d-flex flex-row flex-fill pt-4 p-2">
          <BeerList
            beers={this.state.beers}
            updateSelectedBeer={this.updateSelectedBeer}
          />
          <BeerDetails beer={this.state.beers[this.state.selectedBeer]} />
        </div>
      </div>
    );
  }
}

export default App;
