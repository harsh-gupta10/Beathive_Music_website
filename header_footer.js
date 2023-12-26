// const element = document.getElementsByClassName("navbar");
// var ele2 = element.querySelectorAll("a");

// ele2.forEach(function (element) {
//   // console.log(element.textContent);
//   ele2.addEventListener("mouseover", function () {
//     ele2.style.backgroundColor = "blue";
//   });
// });



// const element = document.getElementsByClassName("navbar");
// const nestedElement = element.querySelector("a");

// // console.log(nestedElement.textContent);
// console.log("hiiiiiiii")
// element.addEventListener("mouseover", function() {
//     nestedElement.style.color = "blue";
// });

// element.addEventListener("mouseout", function() {
//     nestedElement.style.color = "";
// });

// const element = document.querySelector('navbar');
// element.addEventListener('mouseover', () => {
//   element.classList.add('navbar');
// });

// element.addEventListener('mouseout', () => {
//     element.classList.remove('navbar');
//   });


// Get all the 'a' tags
const aTags = document.querySelectorAll('.navbar a');

// Loop through the 'a' tags and add event listeners
aTags.forEach(a => {
    var co=a.style.color
    a.addEventListener('mouseover', () => {
    a.style.color = 'red';
    });
    a.addEventListener('mouseout', () => {
    a.style.color = co;
    });
});
