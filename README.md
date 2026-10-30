# WeatherLy

WeatherLy is a simple and responsive weather application that allows users to search for a city and view its current weather information. It uses weather APIs to fetch real-time weather data based on the selected location.

## Features

- Search weather by city name.
- Fetch location coordinates using the Open-Meteo Geocoding API.
- Display current temperature.
- Show wind speed and humidity.
- Responsive user interface.
- Dynamic weather data using Axios.

## Tech Stack

**Frontend**
- HTML5
- CSS3
- Bootstrap 5
- JavaScript

**API & HTTP Client**
- Open-Meteo Geocoding API
- Open-Meteo Weather Forecast API
- Axios

## APIs Used

**1. Open-Meteo Geocoding API**

Used to convert city names into geographic coordinates (latitude and longitude).

https://geocoding-api.open-meteo.com/v1/search

**2. Open-Meteo Weather Forecast API**

Used to fetch current weather information based on geographic coordinates.

https://api.open-meteo.com/v1/forecast

## How It Works

1. The user enters a city name in the search bar.
2. The Geocoding API finds the latitude and longitude of that city.
3. Axios sends a request to the Open-Meteo Weather API.
4. The API returns current weather information.
5. WeatherLy displays the temperature, wind speed, and humidity.


## Purpose

This project was created as a practical learning experience to improve my understanding of JavaScript, asynchronous programming, API integration, Axios, and responsive web design.

## Author

md-rahman67