import React, { useState } from "react";
import hogs from "../porkers_data";
import Nav from "./Nav";
import HogCard from "./HogCard";
import FilterBar from "./FilterBar";
import HogForm from "./HogForm";

function App() {
  const [allHogs, setAllHogs] = useState(hogs);
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [greaseOnly, setGreaseOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const visibleHogs = allHogs
    .filter((hog) => !hiddenHogs.includes(hog.name))
    .filter((hog) => (greaseOnly ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "weight") return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">
      <Nav />
      <FilterBar
        greaseOnly={greaseOnly}
        setGreaseOnly={setGreaseOnly} // Fixed prop name
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <HogForm
        onAddHog={(newHog) =>
          setAllHogs((prevHogs) => [...prevHogs, newHog])
        }
      />
      <div className="ui grid container">
        {visibleHogs.map((hog) => (
          <HogCard
            key={hog.name}
            hog={hog}
            onHideHog={() => setHiddenHogs((prev) => [...prev, hog.name])}
          />
        ))}
      </div>
    </div>
  );
}

export default App;