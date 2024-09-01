# Anime Quote Generator

This project is a web application that generates random anime quotes and displays the anime character's image using a combination of the Animechan API and a local Node.js package, `animequotes`. The application is hosted on Render.

**Live Demo**: [Anime Quote Generator on Render](https://your-render-app-url)

## Features

- Generates random anime quotes using the Animechan API and falls back to the `animequotes` package if the API is unavailable.
- Displays the character's name and the anime title.
- Retrieves and displays an image of the anime using the Jikan API.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js (Express)
- Animechan API (fallback to `animequotes` package)
- Jikan API

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Goutam-Mahur/anime-quote-generator
    ```
2. Navigate to the project directory:
    ```bash
    cd anime-quote-generator
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and specify the port:
    ```bash
    PORT=4000
    ```
5. Start the server:
    ```bash
    node server.js
    ```
6. The application will be running at `http://localhost:4000`.

## File Structure

- `dist/`
  - `index.html`: The main HTML file containing the structure of the web page.
  - `styles.css`: The CSS file for styling the web page.
  - `script.js`: The JavaScript file containing the logic for fetching and displaying quotes and images.
  - `image.jpeg`: The image displayed when the site first loads.
- `server.js`: The Node.js server file that handles API requests and serves the frontend.
- `.env`: Environment variables file specifying the port.
- `package.json`: Contains metadata about the project and its dependencies.
- `package-lock.json`: Automatically generated file that locks the versions of the dependencies.

## Usage

1. Visit the deployed site on Render.
2. Click the "Generate a Quote" button to fetch a random anime quote.
3. The quote, character name, and anime title will be displayed, along with an image of the anime.

## APIs Used

- [Animechan API](https://animechan.xyz): Provides random anime quotes. The application falls back to the `animequotes` package if the API is unavailable.
- [Jikan API](https://jikan.moe): Retrieves anime data, including images.
