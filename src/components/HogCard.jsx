import React, { useState } from "react";

function HogCard({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    console.log("Toggling showDetails for", hog.name, "to:", !showDetails, "greased:", hog.greased);
    setShowDetails((prev) => !prev);
  }

  function handleHideClick(e) {
    e.stopPropagation();
    onHideHog(hog.name);
  }

  return (
    <div
      aria-label="hog card"
      className="ui eight wide column card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={`Photo of ${hog.name}`} className="hog-image" />
      <button onClick={handleHideClick}>Hide Me</button>
      {showDetails && (
        <div className="ui segment">
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: <span>{String(hog.weight)}</span></p>
          <p>{hog.greased ? "Greased" : "Nongreased"}</p>
          <p>Medal: {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default HogCard;