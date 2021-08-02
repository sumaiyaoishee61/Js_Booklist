const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Basic Validation
  if (title.value == '' && author.value == '' && year.value == '') {
    alert('Please input your information.');
  } else {
    const newRow = document.createElement('tr');

    //  title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newTitle.classList.add('col-4');
    newRow.appendChild(newTitle);

    //  author
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newAuthor.classList.add('col-4');
    newRow.appendChild(newAuthor);

    //  Year
    const newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newYear.classList.add('col-4');
    newRow.appendChild(newYear);

    // Displaying in UI
    bookList.appendChild(newRow);
  }
});
