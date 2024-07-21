const quoteUrl = 'https://animechan.xyz/api/random';

document.querySelector('.generate').addEventListener('click', async () => {
    const quoteResponse = await fetch(quoteUrl);
    const quoteData = await quoteResponse.json();

    const animeSearchUrl = `https://api.jikan.moe/v4/anime?q=${quoteData.anime}&sfw`;
    const animeResponse = await fetch(animeSearchUrl);
    const animeData = await animeResponse.json();

    if (animeData.data.length > 0) {
        const anime = animeData.data[0];
        const imageUrl = anime.images.jpg.large_image_url;
        document.querySelector('.image img').setAttribute('src', imageUrl);
    } else {
        console.log('No anime data found');
    }

    document.querySelector('.quote').innerHTML = quoteData.quote;
    document.querySelector('.name').innerHTML = `- by ${quoteData.character}`;
    document.querySelector('.anime').innerHTML = quoteData.anime;
});
