import React, {Component} from 'react';
import BookListItem from "./bookListItem/bookListItem";
import {connect} from "react-redux";
import withBookStoreService from "../hoc/withBookStoreService";
import {fetchBooks, bookAddToCart} from "../../actions";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../errorIndicator/errorIndicator";

const BookList = ({books, onAddToCart}) => {
  return (
    <div>
      <ul>
        {
          books.map(book => {
            return (
              <li key={book.id}>
                <BookListItem
                  book={book}
                  onAddToCart={() => onAddToCart(book.id)}
                />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

class BookLisContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error, onAddToCart} = this.props;

    if (loading) {
      return (
        <Spinner/>
      )
    }

    if (error) {
      return (
        <ErrorIndicator/>
      )
    }

    return <BookList
      books={books}
      onAddToCart={onAddToCart}
    />
  }
}

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookStoreService} = ownProps;
  return {
    fetchBooks: fetchBooks(bookStoreService, dispatch),
    onAddToCart: (id) => dispatch(bookAddToCart(id))
  }
};

export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookLisContainer));