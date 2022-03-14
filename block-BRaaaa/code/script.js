let input = document.querySelector(`input`);
let rootElm = document.querySelector(`.list-holder`);

let allMovies = [];

input.addEventListener("keyup", (event) => {
  if(event.keyCode === 13) {
    allMovies.push({name:event.target.value, watched:false});
    event.target.value = "";
  }
  createMovieUI();
});

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMovieUI();
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovieUI();
}

function createMovieUI() {
  rootElm.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement(`input`);
    let span = document.createElement("span");
    let label = document.createElement("label");
    input.type = "checkbox";
    input.classList.add("checkbox");
    input.id = i;
    label.innerText = movie.name;
    label.for = i;

    input.checked = movie.watched;
    span.innerText = "❌";
    span.setAttribute("data-id", i);

    input.addEventListener("change", handleChange);
    span.addEventListener("click", handleDelete);

    li.append(input, label, span);
    rootElm.append(li);
  });
}

createMovieUI();
