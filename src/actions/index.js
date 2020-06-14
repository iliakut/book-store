export const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_LOADED',
    payload: newBooks,
  }
};

export const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUESTED',
  }
};

export const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_ERROR',
    payload: error
  }
};

export const fetchBooks = (bookStoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookStoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)));
};

