
<h3 align="center">CarbonWise</h3>
<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://github.com/PRASUN-SITAULA/carbonWise/assets/89672957/106f3a07-d14a-4ee9-9e0c-c8cfbc635a79">

</p>


## Description
Welcome to the CarbonWise, a LLM powered web app that calculates the carbon footprint of a family and gives advisory to reduce the carbon footprint.
CarbonWise harnesses the formidable capabilities of OpenAI's Language Model (LLM) via the OpenAI API to empower individuals to make informed decisions for a greener future.

Our app facilitates people to take actions for reducing their carbon footprint by asking users about their daily activity data such as number of people in household, electricity consumption, heating source, distance travelled using various mediums and lifestyle. This data is then processed through OpenAI's Language Model to generate personalized recommendations aimed at reducing users' environmental impact and tackling climate change.

Through our web platform, we seek to increase individuals' awareness of their environmental actions and offer tailored suggestions to decrease the pollution emitted by their daily activities.


<video src="https://github.com/PRASUN-SITAULA/carbonWise/assets/109226874/b4fc2eea-f489-45e3-9c49-d2fbfa681274"></video>



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
<!-- 
## Key Features

* User-Friendly: Easy-to-use web app for quick README file generation.
* Customization: Tailor the generated README file by providing your project's description and programming language.
* Markdown Format: Automatically formats the README file in Markdown. -->

## Installation Guide 

### Clone this repository
```bash
git clone https://github.com/PRASUN-SITAULA/carbonWise.git
```
### Go into the repository
```bash
cd carbonWise
```
### Install packages
Navigate to the frontend and backend directory
```bash
yarn install
```

### Run the server
Navigate to the backend directory.
```bash
yarn start
```
### Run the Frontend
Navigate to the frontend directory
```bash
yarn dev
```
### Visit the Page
```bash
Open your browser and navigate to http://localhost:5173.
```

## Configuration
- Obtain your OpenAI API key: Visit [OpenAI](https://openai.com/product) to get your API key.

- Create a .env file in the backend folder of the project and add the following:
```bash
OPENAI_API_KEY=your-api-key-goes-here
PORT=3000
```

## Usage

![Landing](https://github.com/PRASUN-SITAULA/carbon-footprint-reduction-advisor/assets/89672957/3a9eeeb8-ff76-45ff-953c-0674a298b6c6)
![image](https://github.com/PRASUN-SITAULA/carbonWise/assets/89672957/b8210e87-5bc7-4f41-acff-03de03576152)
![image](https://github.com/PRASUN-SITAULA/carbonWise/assets/89672957/327fd2cf-ad44-43f5-8c6f-e9438a92680b)
![image](https://github.com/PRASUN-SITAULA/carbonWise/assets/89672957/98448233-dda5-4723-9fb7-dc850267e37f)


## Credits
[Prasun Sitaula](https://github.com/PRASUN-SITAULA)

[Subash Lamichhane](https://github.com/Subash-Lamichhane)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
