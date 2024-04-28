
    
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQ1MzFmMGRkOGY3NmY2NDE2NWEwNzU4MDQ1M2QzOSIsInN1YiI6IjY2MmIyMzQ5NzY0ODQxMDExZDJjMzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bNR43UvxNhyv-aUuh3xtx44tXz-IjayN-QrgO-ATUMA'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    const movies = response.results;
    console.log(movies);
    const moviesElement = document.getElementById('movies');
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movieCard');
      movieCard.innerHTML = `
        <div class="movieCard">
          <img src="${movie.poster_path}"></img>
          <h2>${movie.title}</h2>
          <p>${movie.overview}</p>
          <p>${movie.vote_average}</p>
        </div>
      `;
      moviesElement.appendChild(movieCard);
    });
  })
  .catch(err => console.error(err));
    
    
   
    



