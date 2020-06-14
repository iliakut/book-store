const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: 'name',
      count: 3,
      total: 100
    }
  ],
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
    default:
      return state;
  }
};

export default reducer;
