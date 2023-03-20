import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CalendarTime from "./CalendarTime";

function Nutritions() {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])

  const searchNutrition = query => {
    API.search(query)
      .then(res => setResults(res.data))
      .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    searchNutrition(search);
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={handleInputChange}
            value={search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for food"
            id="search"
          />
          <button onClick={handleFormSubmit} className="btn btn-warning mt-3">
            Search
          </button>
        </div>
      </form>
      <ul className="list-group">
        {results.map(result => (
          <li className="list-group-item">
            Calories of {result.name}: {result.calories}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default Nutritions;