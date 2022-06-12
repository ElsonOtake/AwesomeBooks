const formStorage = {
  title: '',
  author: '',
};

export const populateStorage = (title, author) => {
  formStorage.title = title;
  formStorage.author = author;
  const storeData = JSON.stringify(formStorage);
  localStorage.setItem('books', storeData);
};

export const populateNewForm = () => {
  const storeData = JSON.parse(localStorage.getItem('books'));
  return [storeData.title, storeData.author];
};
