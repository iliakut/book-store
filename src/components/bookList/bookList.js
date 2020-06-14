import React, {Component} from 'react';
import BookListItem from "./bookListItem/bookListItem";
import {connect} from "react-redux";
import withBookStoreService from "../hoc/withBookStoreService";
import {booksLoaded, booksRequested, booksError} from "../../actions";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../errorIndicator/errorIndicator";

class BookList extends Component {
  componentDidMount() {
    const {
      bookStoreService,
      booksLoaded,
      booksRequested,
      booksError} = this.props;
    booksRequested();
    bookStoreService.getBooks()
      .then((data) => {
        booksLoaded(data);
      })
      .catch((error) => {
        booksError(error);
      });
  }

  render() {
    const {books, loading, error} = this.props;

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

    return (
      <div>
        <ul>
          {
            books.map(book => {
              return (
                <li key={book.id}>
                  <BookListItem book={book}/>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({books, loading, error}) => {
  return {
    books,
    loading,
    error,
  }
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};

export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));