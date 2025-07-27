import React from "react";

function FilterBar({ greaseOnly, setGreaseOnly, sortBy, setSortBy }) {
  return (
    <div className="ui form segment">
      <div className="inline field">
        <label htmlFor="greasedFilter">Greased Pigs Only?</label>
        <input
          type="checkbox"
          id="greasedFilter"
          checked={greaseOnly}
          onChange={(e) => {
            console.log("Checkbox changed to:", e.target.checked);
            setGreaseOnly(e.target.checked);
          }}
        />
        <div className="inline field">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;