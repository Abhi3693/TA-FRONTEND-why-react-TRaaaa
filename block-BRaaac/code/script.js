let input = document.querySelector(".movie-input");
let rootElm = document.querySelector(".list-holder");
let all = document.querySelector(".all");
let active = document.querySelector(".activeBTN");
let completed = document.querySelector(".completed");
let remove = document.querySelector(".remove");


let allMovies = localStorage.getItem("allMovies") 
  ? JSON.parse(localStorage.getItem("allMovies")) 
  : [];

function updateAllMovies(val = allMovies) {
  allMovies = val;
  localStorage.setItem("allMovies", JSON.stringify(val));
  createMoviesUI();
}

input.addEventListener("keyup", (event) => {
  if(event.keyCode === 13) { 
    if(event.target.value) {
      allMovies.push({name:event.target.value, watched: false});
      event.target.value = "";
    }
   updateAllMovies();
  }
});

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  updateAllMovies();
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id,1);
  updateAllMovies();
}

function createElement(elm, attr = {}, ...childrens) {
  let element = document.createElement(elm);
  for(let key in attr) {
    if(key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else if(key.startsWith("onChange")) {
      let eventType = key.replace("on", "").toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else if(key.startsWith("onClick")) {
      let eventType = key.replace("on", "").toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key]
    }
  }
  childrens.forEach((child) => {
    if(typeof child === "object") {
      element.append(child)
    }
    if(typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element
}

function createMoviesUI(data = allMovies) {
  rootElm.innerHTML = "";
  data.forEach((movie, i) => {
    let li = createElement(
      "li", 
      {}, 
      createElement("input", { 
        type : "checkbox", id: i, checked: movie.watched, onChange: handleChange }),
      createElement("label", 
        {for: i}, 
        movie.name),
      createElement("span", 
      {"data-id": i, onClick: handleDelete}, 
      "❌")
    );
    rootElm.append(li);
  });
}

let tag ;

function activeBTN(val = all) {
  all.classList.remove("active");
  active.classList.remove("active");
  completed.classList.remove("active");
  remove.classList.remove("active");
  val.classList.add("active");
}


all.addEventListener("click", (event) => {
  activeBTN(all);
  createMoviesUI(allMovies);
});

active.addEventListener("click", (event) => {
  activeBTN(active);
  let toWatch = allMovies.filter((mov)=> {return !mov.watched});
  createMoviesUI(toWatch);
});

completed.addEventListener("click", (event) => {
  activeBTN(completed);
  let watchedMov = allMovies.filter((mov)=> {return mov.watched});
  createMoviesUI(watchedMov);
});

remove.addEventListener("click", (event) => {
  activeBTN(remove);
  let toWatch = allMovies.filter((mov)=> {return !mov.watched});
  updateAllMovies(toWatch);
});

activeBTN();
createMoviesUI();