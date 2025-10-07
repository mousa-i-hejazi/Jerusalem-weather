## Simple Weather App – Jerusalem Weather Technical Requirements ##
The Jerusalem Weather App displays the current weather in Jerusalem using the OpenWeatherMap API.
### Folder Structure ###
• src/index.jsx — the entry point

• src/App.jsx — contains the main logic

• package.json

• README.md (Documentation)
### Requirements ###
1. Weather Card Information contains:
o current date (in Arabic)
o current time (updates every 60 seconds)
o current temperature (in °C)
o weather description (cloudy, clear, ... etc.)
o the min and max temperature
2. The card should have a good design.
### Functionality ###
• Fetching data from OpenWeatherMap API.

• Convert temp from Kelvin to °C using the formula: °C = Kelvin - 273.15.

• Handle loading (showing "Loading...") during data fetching.

• Show "Error fetching data" message when something goes wrong.
### Technologies & Tools ###
• React.js

• React Hooks: useState, useEffect

• JavaScript

• MUI (for design)

• OpenWeatherMap API