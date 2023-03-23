import React, { useState } from "react";
import API from "../utils/API";
import Moment from 'react-moment';

function Nutritions() {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const [formData, setFormData] = useState({ food: "" });
  const date = new Date();

  const searchFood = query => {
    API(query)
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
      meal: document.getElementById("food-search").value,
    });
    localStorage.setItem("searchedFood", JSON.stringify(savedSearch));
    setSearch("");
    setFormData({
      food: ""
    });
  };

  const calorieSum = () => {
    let sum = 0;
    for (let i = 0; i < results.length; i++) {
      sum += results[i].calories;
    }
    return sum;
  };

  return (
    <div className="container" id="nutritions">
      <div className="card-deck">
        <div className="col">
          <div className="row">
            <div className="card text-center">
              <h2 className="title">Daily Intake Calories Calculator</h2>
              <h5>How to lose weight?</h5>
              <p>
                Keep your net calories below your calculated daily calorie needs.
                You can do this by eating fewer calories or exercising more.
                For the best results, do both!
                <br />
                <br />
                You can use the Daily Intake Calories Calculator tool to help you determine the right calorie limit for your wellness goals.
                Your daily calorie limit is your target caloric intake per day.
              </p>
              <div className="dateInput my-3">
                <h5 id="date" className="font-weight-bold">Today's date: <Moment format='MMMM Do YYYY'>{date}</Moment></h5>
              </div>
              <p>Please provide your meal details including food name and its quantity and add all the food you had for better results.</p>
              <form>
                <div className="form-group">
                  <textarea
                    onChange={handleInputChange}
                    value={search}
                    name="food"
                    type="text"
                    className="form-control"
                    placeholder="Please add all the food and use commas to separate each food item in each meal. For example: 200g mashed potatoes, 100g sausages, 75g strawberries, 120g yogurt"
                    id="food-search"
                  />
                </div>
                <button onClick={handleFormSubmit} className="btn btn-trackers" type="submit">
                  Calculate your calorie intake
                </button>
              </form>
              <div className="result-list mb-3">
                <h5>Your calorie intake</h5>
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
                      <tr key={result.name}>
                        <td>{result.name}</td>
                        <td>{result.serving_size_g}</td>
                        <td>{result.calories.toFixed(1)}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="2"><strong>Total calories:</strong></td>
                      <td id="sumCal">{calorieSum().toFixed(1)}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-muted small">*The table above shows one food per row</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Nutritions;