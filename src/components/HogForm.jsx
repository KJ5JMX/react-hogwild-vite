import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    image: "",
    medal: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newHog = {
      name: formData.name,
      image: formData.image,
      specialty: formData.specialty,
      greased: formData.greased,
      weight: parseFloat(formData.weight),
      "highest medal achieved": formData.medal,
    };

    onAddHog(newHog);

    // Clear form
    setFormData({
      name: "",
      image: "",
      specialty: "",
      greased: false,
      weight: "",
      medal: "",
    });
  }

  return (
    <form className="ui form segment" onSubmit={handleSubmit}>
      <h2>Add a New Hog</h2>

      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="image">Image URL:</label>
        <input
          name="image"
          id="image"
          type="text"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="specialty">Specialty:</label>
        <input
          name="specialty"
          id="specialty"
          type="text"
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="weight">Weight:</label>
        <input
          name="weight"
          id="weight"
          type="number"
          step="0.1"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="medal">Highest Medal Achieved:</label>
        <input
          name="medal"
          id="medal"
          type="text"
          value={formData.medal}
          onChange={handleChange}
        />
      </div>

      <div className="inline field">
        <label htmlFor="greased-form">Greased?</label>
        <input
          name="greased"
          id="greased-form" // unique ID
          type="checkbox"
          checked={formData.greased}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="ui button primary">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;