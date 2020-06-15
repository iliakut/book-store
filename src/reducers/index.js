const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUESTED':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case 'FETCH_BOOKS_LOADED':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_ERROR':
      return {
        ...state,
        books:[],
        loading: false,
        error: action.payload,
      };
    case 'BOOK_ADD_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const indexItem = state.cartItems.findIndex(({id}) => id === bookId);
      const item = state.cartItems[indexItem];

      let newItem;
      if (item) {
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + book.price
        }
      } else {
        newItem = {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price
        };
      }

      if (indexItem < 0) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            newItem
          ]
        }
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, indexItem),
          newItem,
          ...state.cartItems.slice(indexItem + 1)
        ]
      };
    default:
      return state;
  }
};

export default reducer;
