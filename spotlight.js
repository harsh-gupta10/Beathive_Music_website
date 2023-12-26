// Add the zoom-in/zoom-out animation to the artist's image
count=0
const artistImage = document.getElementById("artist-image");
artistImage.addEventListener("mouseover", () => {
  artistImage.classList.add("zoom-in");
});
artistImage.addEventListener("animationend", () => {
  artistImage.classList.remove("zoom-in");
  artistImage.classList.add("zoom-out");
});
artistImage.addEventListener("mouseleave", () => {
  artistImage.classList.remove("zoom-out");
});



// Handle the review form submission
const reviewForm = document.getElementById("review-form");
const reviewsTable = document
  .getElementById("reviews-table")
  .getElementsByTagName("tbody")[0];
reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("name-input");
  const ratingInput = document.querySelector("input[name=rating]:checked");
  const reviewInput = document.getElementById("review-input");
  const name = nameInput.value;
  const rating = ratingInput.value;
  const review = reviewInput.value;
  const reviewData = { name, rating, review };
  const reviewRow = reviewsTable.insertRow();
  for (const [key, value] of Object.entries(reviewData)) {
    const cell = reviewRow.insertCell();
    cell.textContent = value;
  }
  nameInput.value = "";
  ratingInput.checked = false;
  reviewInput.value = "";
});

// Display the countdown timer
// const countdownTimer = document.getElementById("countdown-timer");
// const releaseDate = new Date("June 30, 2023 00:00:00");
// const updateCountdown = () => {
//     const now = new Date();
//     const timeDifference = releaseDate - now;
//     if (timeDifference > 0) {
//     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes = Math.floor(
//       (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
//     );
//     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
//     countdownTimer.textContent = `Countdown to release: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
//     } else {
//     countdownTimer.textContent = "The release is here!";
//     }
// };

function countdown() {
  var now = new Date();
  var releaseDate = new Date("June 30, 2023 00:00:00");
  var diff = releaseDate.getTime() - now.getTime();
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}
setInterval(countdown, 1000);
// setInterval(updateCountdown, 1000);





const text = "Arijit Singh is a prominent Indian playback singer, composer, and music producer, known for his soulful and melodious voice. He was born on April 25, 1987, in Murshidabad, West Bengal, and raised in a family of musicians. His father was a Punjabi music composer, and his maternal grandmother was a classical singer, which fueled Arijit's passion for music from an early age Arijit Singh started his music career by participating in a singing reality show called Fame Gurukul in 2005. However, he did not win the competition but gained valuable experience and exposure that helped him in the long run. He later moved to Mumbai to pursue a career in the music industry and started working as a music programmer and assistant to prominent music directors like Pritam Chakraborty, Shankar-Ehsaan-Loy, and Vishal-Shekhar. In 2010, Arijit made his Bollywood debut as a playback singer with the song 'Phir Mohabbat' from the movie Murder 2. However, it was his breakthrough song 'Tum Hi Ho' from the movie Aashiqui 2 in 2013 that made him a sensation and propelled him to fame. The song became an instant hit and earned him critical acclaim and several awards, including the Filmfare Award for Best Male Playback Singer. Since then, Arijit has become one of the most sought-after playback singers in the Indian music industry, delivering several chartbusters across various languages, including Hindi, Bengali, and Tamil. His soulful and emotional renditions often leave listeners spellbound, and he has been praised for his ability to express emotions through his music. Arijit has won several awards, including six Filmfare Awards, three IIFA Awards, and one National Film Award. He has also been honored with the prestigious Padma Shri award by the Government of India in 2021 for his contribution to the field of music. Apart from singing, Arijit is also a trained classical musician and has composed and produced music for various films and albums. He has collaborated with several prominent music directors and singers, including Amit Trivedi, Vishal-Shekhar, Shankar-Ehsaan-Loy, and Shreya Ghoshal, among others. In conclusion, Arijit Singh is a versatile and talented musician who has made a significant contribution to the Indian music industry. His ability to express emotions through his music, coupled with his melodious voice, has earned him a dedicated fan base not just in India, but across the world. He continues to inspire and entertain music lovers with his soulful and timeless renditions."
// const speed = 500; // the speed at which each character is typed out in milliseconds
// const element = document.getElementById("typewriter"); // get the HTML element to add the typing effect to

// let i = 0;

// function typeWriter() {
//   if (i < text.length) {
//     element.innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// typeWriter();


// const text = "Hello, World!";
const delay = 45; // milliseconds

function typeWriter(element, text, delay) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
  type();
}

const element = document.getElementById("typewriter");
typeWriter(element, text, delay);