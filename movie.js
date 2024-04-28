const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQ1MzFmMGRkOGY3NmY2NDE2NWEwNzU4MDQ1M2QzOSIsInN1YiI6IjY2MmIyMzQ5NzY0ODQxMDExZDJjMzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bNR43UvxNhyv-aUuh3xtx44tXz-IjayN-QrgO-ATUMA'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    const movies = data.results.slice(0, 20); 
    const cardsContainer = document.querySelector('.cards');

    movies.forEach(movie => {
      if (!movie.poster_path) return; 

      const card = document.createElement('div');
      card.classList.add('card');
      card.id = movie.id;

      const title = document.createElement('h2');
      title.textContent = movie.title;

      const image = document.createElement('img');
      image.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
      image.alt = '영화 이미지';

      const overview = document.createElement('p');
      overview.textContent = '줄거리: ' + movie.overview;

      const rating = document.createElement('p');
      rating.textContent = '별점: ' + movie.vote_average;

      card.appendChild(title);
      card.appendChild(image);
      card.appendChild(overview);
      card.appendChild(rating);

      

      card.addEventListener('click', () => {
        alert('ID:' + card.id);
      });

      cardsContainer.appendChild(card);

      
    });
  })
  .catch(err => console.error(err));