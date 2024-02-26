/* Fetch Jokes from API */
fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('joke');

        jokeElement.innerHTML = jokeText;
    });

/* Getting Random Jokes */
// const jokeElement = document.getElementById("joke");
// const jokes = [
//   "Why did the scarecrow win an award? Because he was outstanding in his field!",
//   "What do you call a fish with no eyes? Fsh!",
//   "What do you call a lazy kangaroo? Pouch potato!",
// ];

// function getRandomJoke() {
//   const randomIndex = Math.floor(Math.random() * jokes.length);
//   return jokes[randomIndex];
// }
// jokeElement.innerHTML = getRandomJoke();

/* Getting Random Images */
// const imageElement = document.getElementById("img");
// const images = [
//     "images/img1.jpg",
//     "images/img2.jpg",
//     "images/img3.jpg",
//     "images/img4.jpg",
//     "images/img5.jpg"
// ]

// function getRandomPhotos() {
//     const randomIndex = Math.floor(Math.random() * images.length);
//     return images[randomIndex];
// }

// imageElement.src = getRandomPhotos();
