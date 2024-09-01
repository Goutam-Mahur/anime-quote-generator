require('dotenv').config();

const express = require('express');
const axios = require('axios');
const animeQuotes = require('animequotes'); 
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));


app.get('/api/quotes/random', async (req, res) => {
  try {
    // Try fetching from AnimeChan API
    const animeChanApiUrl = 'https://animechan.io/api/v1/quotes/random';
    let animeChanResponse = await axios.get(animeChanApiUrl);
    let animeObj = animeChanResponse.data.data;

    const animeName = encodeURIComponent(animeObj.anime.name);

    // Fetch anime details using the Jikan API
    const animeSearchUrl = `https://api.jikan.moe/v4/anime?q=${animeName}&sfw`;
    const animeResponse = await axios.get(animeSearchUrl);
    const animeDataWithImage = animeResponse.data;

    let imageUrl = '';
    if (animeDataWithImage.data.length > 0) {
      imageUrl = animeDataWithImage.data[0].images.jpg.large_image_url;
    }

    return res.json({
      anime: animeObj.anime.name,
      name: animeObj.character.name,
      quote: animeObj.content,
      imageUrl: imageUrl
    });
  } catch (error) {
    console.error("Error with AnimeChan API, falling back to animequotes package", error);

    try {
      // Fallback to animequotes package
      const animeObj = animeQuotes.randomQuote();
      const animeName = encodeURIComponent(animeObj.anime);

      // Fetch anime details using the Jikan API
      const animeSearchUrl = `https://api.jikan.moe/v4/anime?q=${animeName}&sfw`;
      const animeResponse = await axios.get(animeSearchUrl);
      const animeDataWithImage = animeResponse.data;

      let imageUrl = '';
      if (animeDataWithImage.data.length > 0) {
        imageUrl = animeDataWithImage.data[0].images.jpg.large_image_url;
      }

      return res.json({
        anime: animeObj.anime,
        name: animeObj.name,
        quote: animeObj.quote,
        imageUrl: imageUrl
      });
    } catch (fallbackError) {
      console.error("Error with fallback method", fallbackError);
      res.status(500).send('Error fetching quote and image');
    }
  }
});

// Handle all other routes by serving the static index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
