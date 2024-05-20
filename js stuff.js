let qoute = document.getElementById("quote");
let author = document.getElementById("author");

 //* api we are gonna use *//
 const url = "https://api.quotable.io/random";

 let getQoute = () => {
    fetch(url) 
      .then((data) => data.json())
      .then((item) => {
        qoute.innerText = item.content;
        author.innerText = item.author;
      });
 };

 window.addEventListener("load", getQoute);
 btn.addEventListener("click", getQoute);