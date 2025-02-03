
<h3 align="center">EcoTrack</h3>
<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">

</p>


## Description
Welcome to the EcoTrack, a LLM powered web app that calculates the carbon footprint of a family and gives advisory to reduce the carbon footprint.
EcoTrack harnesses the formidable capabilities of OpenAI's Language Model (LLM) via the OpenAI API to empower individuals to make informed decisions for a greener future.

Our app facilitates people to take actions for reducing their carbon footprint by asking users about their daily activity data such as number of people in household, electricity consumption, heating source, distance travelled using various mediums and lifestyle. This data is then processed through OpenAI's Language Model to generate personalized recommendations aimed at reducing users' environmental impact and tackling climate change.

Through our web platform, we seek to increase individuals' awareness of their environmental actions and offer tailored suggestions to decrease the pollution emitted by their daily activities.


## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation Guide](#installation-guide)
- [Configuration](#configuration)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Features
- Clean and easy to navigate User Interface.
- Calculate Carbon Footprint impact: Accurate calculation of carbon footprint three aspects energy consumption, lifestyle choices and transportaion.
- Personalized insights: Break down of footprint by category, highlighting areas with the most significant impact.
- Actionable advice: Actionable steps to reduce carbon footprint effectively using generative ai based on provided data.


## Technologies

This project is built using the following technologies:

- React: Frontend library for building user interfaces.
- Vite: Frontend build tool for faster development.
- Tailwind CSS: Utility-first CSS framework for styling.
- Express: Backend framework for handling server-side logic.
- Langchain: Language model used for providing carbon footprint reduction advice.

## Installation Guide 

### Clone this repository
```bash
git clone 
```
### Go into the repository
```bash
cd EcoTrack
```
### Install packages
Navigate to the frontend and backend directory
```bash
npm install
```

### Run the server
Navigate to the backend directory.
```bash
npm start
```
### Run the Frontend
Navigate to the frontend directory
```bash
npm run dev
```
### Visit the Page
```bash
Open your browser and navigate to http://localhost:5173.
```

## Configuration
- Obtain your OpenAI API key: Visit [OpenAI](https://openai.com/product) to get your API key. You can get it from ```NagaAI``` discord server too.

- Create a .env file in the backend folder of the project and add the following:
  ```bash
  OPENAI_API_KEY=your-api-key-goes-here
  OPENAI_BASE_URL=https://api.naga.ac/v1
  PORT=3000
  ```
For the ```OPENAI_BASE_URL``` section, you need to specify the base URL for the API you're using. For example, if you're using the OpenAI API, enter ```https://api.openai.com/v1```. If you're using the OpenAI API from Naga, enter ```https://api.naga.ac/v1```. Ensure that the correct base URL is provided based on the API provider you're working with.

