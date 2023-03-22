# WellFit Application

A web application that provides information for women on diet, fitness workouts. The user can calculate how many calories are in the food they are consuming, workout their BMI, BMR and also calculate their 1RM. Along with all of this information the user is provided with links to Youtube videos for workout ideas.

The React.js code uses functions to handle user interactions and update the content on the screen. Two APIs are used to retrieve dietry to work out calories per serving and video workout ideas. 

React was firstly installed:
```
npx create-react-app wellfit
```

## NPM packages
The NPM packages used in this wesbite:
- *Fitness-Calc*
- *Fitness-Calculator*
- *Bootstrap* 
- *Bootstrap icon*
- *Font Awesome*
- *Axios*
- *React Moment*

```
npm i fitness-calc
```
```
npm i fitness-calculator
```
```
npm install bootstrap
```
```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```
```
npm i react-moment
```
```
npm i axios
```

## APIs 
The two APIs used in this website: 
- *Nutrition by API-Ninjas*
- *Youtube*


## Working Tree
![Working tree](src/assets/filetree.png)

This app has been created as a group project by **Bex Ford, Clelia Mangione and Jingyue Zhao** for the edEX Front-End Development Bootcamp. 

## Table of Contents

- [Key Features](#key-features)
- [Workflow](#workflow)
- [Link to the Application](#link-to-deployed-application)
- [Final result](#final-results)

# Key Features

- Calculate how many calories are in the food you have consumed.
- Work out your 1RM (one rep max).
- Work out your BMI (Body mass index).
- Work out your BRM (Basal metabolic rate).
- Watch workout videos from Youtube.

# Workflow

1. The user types the name of the food they have consumed. 
2. This triggers the Nutrition API. 
3. In the Videos Ideas section, the YouTube API is triggered to show 3 video ideas for general workouts.

## Link to deployed Application

[WellFit](https://well-fit.netlify.app/)

## GitHub 
[GitHub](https://github.com/Clelia-M/WellFit)

## Final Results

When the user visits the page it is displayed with a navigation bar at the top and the logo as you can see in the image below:
![Website](src/assets/final.png)

![Website](src/assets/caloriesbmr.png)

![Website](src/assets/onerepmax.png)

## Nutrition API

The first API we created was from **Nutrition by API-Ninjas**. This API allows users to input there food and the API will calculate how many calories is in the specific food they have entered. 


## Youtube API 

The second API we created was **Youtube**. This enabled users to have a video link of workout ideas. We felt this made the overall user experience great as all of the information was given without the user having to do a second search. As you can see in the image below the user has the option to click on **Watch on Youtube** button if they choose to do so. 

## Brand theme
Below is an image of the colour palette in which we used throughout designing the web application. 

![colour theme](src/assets/colourpalette.png)

The font style we used for this project was called **Jost** from google fonts.


## Credits 

- Ryan Ford (Graphic Designer). Ryan designed the WellFit logo for this project.

