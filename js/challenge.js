const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const counter = document.querySelector("#counter");

let timer = setInterval(function () {
  const count = parseInt(counter.innerText);
  counter.innerText = count + 1;
  counter.value = count + 1;
}, 1000);

plus.addEventListener("click", () => {
  let a = document.getElementById("counter");
  let b = parseInt(a.innerText);
  b++;
  a.innerText = b;
});

minus.addEventListener("click", () => {
  let a = document.getElementById("counter");
  let b = parseInt(a.innerText);
  b--;
  a.innerText = b;
});

//write a callback function
//this CB will grab the number from the counter
//access class= 'likes' ul from html
//create Li
//append li to Ul
//li to have innerText 'number has been liked'
const likeCounts = {}

const likes = document.querySelector(".likes");
const grabNumber = (e) => {
  likeCounts[counter.innerText] = +(likeCounts[counter.innerText] || 0) + 1
  likes.innerHTML = ''
  for (let number in likeCounts) {
    const count = likeCounts[number]
    const listItem  = document.createElement("li");
    listItem.innerText = `${number} has been liked ${count} times`
    likes.appendChild(listItem)
  }
  /*list.innerText = `${parseInt(counter.value)} has been liked`;
  console.log(counter.value);
  likes.appendChild(list);
  parseInt(counter.innerText);*/
};

heart.addEventListener("click", grabNumber);

pause.addEventListener("click", () => {
  if (pause.innerText === "pause") {
    pause.innerText = "resume";
    clearInterval(timer);
  } else if (pause.innerText === "resume") {
    pause.innerText = "pause";
    timer = setInterval(function () {
      const start = document.getElementById("counter");
      const count = parseInt(start.innerText);
      start.innerText = count + 1;
    }, 1000);
  }
});

const form = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById('list')
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  const addComment = document.createElement("div");
  addComment.textContent = commentInput.value;
  commentList.appendChild(addComment)
});
