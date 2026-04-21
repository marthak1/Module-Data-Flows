const titleEl = document.getElementById("title");
const authorEl = document.getElementById("author");
const pagesEl = document.getElementById("pages");
const checkEl = document.getElementById("check");
const submitBtnEl = document.getElementById("submit-btn");
const myLibrary = [];
window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    const book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

submitBtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  submit();
});

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const title = titleEl.value.trim();
  const author = authorEl.value.trim();
  const pagesRaw = pagesEl.value.trim();

  if (!title || !author || !pagesRaw) {
    alert("Please fill all fields!");
    return;
  }

  const pages = Number(pagesRaw);

  if (!Number.isInteger(pages) || pages <= 0) {
    alert("Pages must be a positive number");
    return;
  }

  const book = new Book(title, author, pages, checkEl.checked);

  myLibrary.push(book);
  render();

  // clear form
  titleEl.value = "";
  authorEl.value = "";
  pagesEl.value = "";
  checkEl.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function showMessage(text) {
   const msg = document.createElement("p");
   msg.textContent = text;
   document.body.appendChild(msg);

   setTimeout(() => msg.remove(), 2000);
}
function render() {
  const table = document.getElementById("display");
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = ""; // clears all rows

  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tableBody.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    changeBut.innerText = myLibrary[i].check ? "Yes" : "No";
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    const delBut = document.createElement("button");
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    delBut.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;
      myLibrary.splice(i, 1);
      render();
      showMessage(`You've deleted: ${deletedTitle}`);
    });
    }
}

const deleteAllBtn = document.createElement("button");
deleteAllBtn.textContent = "Delete All";
deleteAllBtn.className = "btn btn-danger";
document.body.appendChild(deleteAllBtn);
deleteAllBtn.addEventListener("click", function () {
  if (myLibrary.length === 0) return;

  const count = myLibrary.length;

  myLibrary.length = 0; // clear all
  deleteAllBtn.disabled = myLibrary.length === 0;
  render();

  showMessage(`Deleted all ${count} books`);
});

