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

  //serch

 function searchAndDisplayPoster() {
  // 입력된 검색어 또는 ID를 가져옵니다.
  const userInput = document.querySelector('.form-control').value;

  // 카드에서 해당하는 정보를 모두 가져와서 출력하는 함수 호출
  displayCardInfo(userInput);
}

function displayCardInfo(userInput) {
  // 카드들을 가져옵니다.
  const cards = document.querySelectorAll('.card');

  // 카드들을 순회하며 입력된 검색어나 ID와 일치하는 카드를 찾습니다.
  cards.forEach(card => {
    const title = card.querySelector('h2').textContent;
    const id = card.id;

    // 입력된 검색어나 ID와 일치하는 카드를 찾으면 해당 카드의 정보를 가져와서 출력합니다.
    if (title.includes(userInput) || id === userInput) {
      const titleText = card.querySelector('h2').textContent;
      const posterUrl = card.querySelector('img').src;
      const overviewText = card.querySelector('p').textContent;
      const ratingText = card.querySelectorAll('p')[1].textContent;

      // 해당 카드의 정보를 출력합니다.
      displayCard(titleText, posterUrl, overviewText, ratingText);
    }
  });
}

function displayCard(title, posterUrl, overview, rating) {
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.innerHTML = ''; 
  const card = document.createElement('div');
  card.classList.add('card');

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const image = document.createElement('img');
  image.src = posterUrl;
  image.alt = '영화 포스터';

  const overviewElement = document.createElement('p');
  overviewElement.textContent = overview;

  const ratingElement = document.createElement('p');
  ratingElement.textContent = rating;

 
  card.appendChild(titleElement);
  card.appendChild(image);
  card.appendChild(overviewElement);
  card.appendChild(ratingElement);

  
  cardsContainer.appendChild(card);
}


document.getElementById('button-addon2').addEventListener('click', searchAndDisplayPoster);
