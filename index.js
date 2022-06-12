import Books from './modules/books.js';
import { populateStorage, populateNewForm } from './modules/local_storage.js';
import dynamicLoad from './modules/list_books.js';
import { inputTitle, inputAuthor } from './modules/user_interface.js';

const awesome = new Books();

if (!localStorage.getItem('books')) {
  populateStorage(inputTitle.value, inputAuthor.value);
} else {
  [inputTitle.value, inputAuthor.value] = populateNewForm();
}

if (localStorage.getItem('booksClass')) {
  awesome.restoreStorage();
}

dynamicLoad(awesome);
