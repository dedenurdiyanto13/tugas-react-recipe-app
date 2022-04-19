import "./App.css";
import "./key";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "9cb040e5";
  const YOUR_APP_KEY = "58ef66db6042e4da5ed1eaadef456865";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1>Resep Makanan</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="cari resep"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />

        <select className="app_healthLabels">
          <option onClick={() => sethealthLabels("vegan")}>vegan</option>
          <option onClick={() => sethealthLabels("vegetarian")}>
            vegetarian
          </option>
          <option onClick={() => sethealthLabels("paleo")}>paleo</option>
          <option onClick={() => sethealthLabels("dairy-free")}>
            dairy-free
          </option>
          <option onClick={() => sethealthLabels("gluten-free")}>
            gluten-free
          </option>
          <option onClick={() => sethealthLabels("wheat-free")}>
            wheat-free
          </option>
          <option onClick={() => sethealthLabels("low-sugar")}>
            low-sugar
          </option>
          <option onClick={() => sethealthLabels("egg-free")}>egg-free</option>
          <option onClick={() => sethealthLabels("peanut-free")}>
            peanut-free
          </option>
          <option onClick={() => sethealthLabels("tree-nut-free")}>
            tree-nut-free
          </option>
          <option onClick={() => sethealthLabels("soy-free")}>soy-free</option>
          <option onClick={() => sethealthLabels("fish-free")}>
            fish-free
          </option>
          <option onClick={() => sethealthLabels("shelfish-free")}>
            shelfish-free
          </option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
