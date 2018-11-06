const numberList = document.querySelector('h2 span');
const formAdd = document.querySelector('form');
const inputAdd = document.querySelector('input.add');
const ul = document.querySelector('ul');
const inputSearch = document.querySelector('input.search');

const taskArray = [];

const addListElem = (e) => {
  e.preventDefault();
  const text = inputAdd.value;
  if (text == "") return;
  const li = document.createElement('li');
  li.innerHTML = text + "<button class='delete'><i class='fas fa-times'></i></button>";

  taskArray.push(li);
  refreshList();

  inputAdd.value = "";
  numberList.textContent = taskArray.length;
  li.querySelector('button').addEventListener('click', removeListElem);

  storeData();
}

const removeListElem = (e) => {
  const index = e.target.parentNode.dataset.index;
  taskArray.splice(index, 1);
  refreshList();
  numberList.textContent = taskArray.length;
}

const refreshList = () => {
  ul.textContent = "";
  taskArray.forEach((elem, index) => {
    elem.dataset.index = index;
    ul.appendChild(elem);
  })
}


const searchElem = (e) => {
  e.preventDefault();
  taskArrayFiltered = taskArray.filter(elem => elem.textContent.toLowerCase().includes(e.target.value.toLowerCase()))
  console.log(taskArrayFiltered);
  ul.textContent = "";
  taskArrayFiltered.forEach(elem => ul.appendChild(elem));
}

formAdd.addEventListener('submit', addListElem);
inputSearch.addEventListener('input', searchElem);


//task which will show immediately
const initial = (text) => {
  if (text == "") return;
  const li = document.createElement('li');
  li.innerHTML = text + "<button class='delete'><i class='fas fa-times'></i></button>";

  taskArray.push(li);
  refreshList();

  numberList.textContent = taskArray.length;
  li.querySelector('button').addEventListener('click', removeListElem);
}
initial("Go to gym!");
initial("Cook a dinner");
initial("Improve JavaScript skills :)");