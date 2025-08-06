async function searchAnime() {
  const query = document.getElementById('searchInput').value.trim();
  const resultsDiv = document.getElementById('animeResults');
  resultsDiv.innerHTML = '';



  if (query === '') {
    resultsDiv.innerHTML = '<p>Please enter an anime name.</p>';
    return;
  }

  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=12`);
    const data = await res.json();

    if (data.data.length === 0) {
      resultsDiv.innerHTML = '<p>No anime found.</p>';
      return;
    }

    data.data.forEach(anime => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
  <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
  <h3>${anime.title}</h3>
   <p><strong>Type : x</strong>${anime.type}</P>
  <p><strong>Year:</strong> ${anime.aired.from ? new Date(anime.aired.from).getFullYear() : 'N/A'}</p>
  <p>${anime.synopsis ? anime.synopsis.slice(0, 120) + '...' : 'No synopsis available.'}</p>
`;

      resultsDiv.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching anime:', error);
    resultsDiv.innerHTML = '<p>Something went wrong. Try again later.</p>';
  }
}

 document.getElementById('searchInput').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    searchAnime();
  }
});


