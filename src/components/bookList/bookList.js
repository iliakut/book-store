import React, {Component} from 'react';
import BookListItem from "./bookListItem/bookListItem";
import {connect} from "react-redux";
import withBookStoreService from "../hoc/withBookStoreService";
import {fetchBooks} from "../../actions";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../errorIndicator/errorIndicator";

const BookList = ({books}) => {
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
  )
};

class BookLisContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
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

    return <BookList books={books}/>
  }
}

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookStoreService} = ownProps;
  return {
    fetchBooks: fetchBooks(bookStoreService, dispatch)
  }
};

export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookLisContainer));