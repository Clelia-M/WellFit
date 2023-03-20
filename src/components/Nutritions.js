import React, { useState } from "react";
import API from "../utils/API";
import CalendarTime from "./CalendarTime";

function Nutritions() {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const [formData, setFormData] = useState({ dateTime: "", food: "" });

  const searchFood = query => {
    API.search(query)
      .then(res => {
        setResults(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    setSearch(event.target.value);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    searchFood(search);
    let savedSearch = JSON.parse(localStorage.getItem("searchedFood")) || [];
    savedSearch.push({
      date: document.getElementById("dateInput").value,
      meal: document.getElementById("food-search").value,
    });
    localStorage.setItem("searchedFood", JSON.stringify(savedSearch));
    setSearch("");
    setFormData({
      dateTime: "",
      food: ""
    });
  };

  const calorieSum = () => {
    let sum = 0;
    for (let i = 0; i < results.length; i++) {
      sum += results[i].calories;
    }
    console.log(sum);
    return sum;
  };

  return (
    <div className="container">
      <div className="card-deck">
        <div className="col">
          <div className="row">
            <div className="card text-center">
              <h2>Daily Intake Calories Calculator</h2>
              <h5>How to lose weight?</h5>
              <p>
                Keep your net calories below your calculated daily calorie needs.
                You can do this by eating fewer calories or exercising more.
                For the best results, do both!
                <br />
                You can use the Daily Intake Calories Calculator tool to help you determine the right calorie limit for your wellness goals.
                Your daily calorie limit is your target caloric intake per day.
              </p>
              <h5>Please provide the details of your meals (date/time, food name and its quantity)</h5>
              <div className="dateInput mb-4">
                <label className="font-weight-bold">Date & Time</label>
                <CalendarTime />
              </div>
              <form>
                <div className="form-group">
                  <textarea
                    onChange={handleInputChange}
                    value={search}
                    name="food"
                    type="text"
                    className="form-control"
                    placeholder="For example: 1 cup mashed potatoes and 2 tbsp gravy"
                    id="food-search"
                  />
                </div>
                <button onClick={handleFormSubmit} className="btn btn-warning my-3" type="submit">
                  Search
                </button>
              </form>
              <div className="result-list mb-4">
                <h5>Your calories intake:</h5>
                <p className="text-muted small">Only one food per row</p>
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Food name</th>
                      <th scope="col">Serving size (g)</th>
                      <th scope="col">Calories (kcal)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map(result => (
                      <tr>
                        <td>{result.name}</td>
                        <td>{result.serving_size_g}</td>
                        <td>{result.calories}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colspan="2">Total calories:</td>
                      <td id="sumCal">{calorieSum()}</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );

}

export default Nutritions;