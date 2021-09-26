"use strict";

window.onload = function () {
  let file = "https://jsonplaceholder.typicode.com/posts";
  fetch(file)
    .then(x => x.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        document.getElementById('post').innerHTML += `<div class='posts'>
                                                     <h1> ${data[i].title} </h1> 
                                                     <p> ${data[i].body} </p>
                                                     <p>Author</p>
                                                     <p><a href='postdetail.html?id=${data[i].id}'>Read More</a></p>
                                                     </div><br>`;
      }
    })
    .catch(error => console.error("Error", error));
}


