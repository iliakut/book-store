import React, {Component} from 'react';
import BookListItem from "./bookListItem/bookListItem";
import {connect} from "react-redux";
import withBookStoreService from "../hoc/withBookStoreService";
import {booksLoaded, booksRequested} from "../../actions";
import Spinner from "../spinner/spinner";

class BookList extends Component {
  componentDidMount() {
    const {bookStoreService, booksLoaded, booksRequested} = this.props;
    booksRequested();
    bookStoreService.getBooks()
      .then((data) => {
        booksLoaded(data);
      });
  }

  render() {
    const {books, loading} = this.props;

    if (loading) {
      return (
        <Spinner/>
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

const mapStateToProps = ({books, loading}) => {
  return {
    books,
    loading
  }
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));