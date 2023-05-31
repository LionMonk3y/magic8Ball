const points = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don’t count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no",
];

// function myFunction() {
//   points.sort(function (a, b) {
//     return 0.5 - Math.random();
//   });
//   document.getElementById("response").innerHTML = points[0];
//   document.getElementById("response").style.fontSize = "18px";
//   setTimeout(timeup, 5000);

//   function timeup() {
//     document.getElementById("response").innerHTML = "8";
//     document.getElementById("response").style.fontSize = "120px";
//     document.getElementById("clear").value = "";
//   }
// }
// const turnButton = document.getElementById('askme');
// const ball = document.querySelector('.ball');

// turnButton.addEventListener('click', function() {
//   ball.classList.toggle('turn');
// });

function myFunction() {
  points.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  document.getElementById("response").innerHTML = points[0];
  document.getElementById("response").style.fontSize = "18px";
  setTimeout(timeup, 5000);

  function timeup() {
    document.getElementById("response").innerHTML = "8";
    document.getElementById("response").style.fontSize = "120px";
    document.getElementById("clear").value = "";
  }
}
const turnButton = document.getElementById('askme');
const ball = document.querySelector('.ball');

turnButton.addEventListener('click', function() {
  ball.classList.toggle('turn');
});