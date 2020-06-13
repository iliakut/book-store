import React, {Component} from 'react';
import BookListItem from "./bookListItem/bookListItem";
import {connect} from "react-redux";
import withBookStoreService from "../hoc/withBookStoreService";
import {booksLoaded} from "../../actions";

class BookList extends Component {
  componentDidMount() {
    const {bookStoreService} = this.props;
    const data = bookStoreService.getBooks();
    this.props.booksLoaded(data);
  }

  render() {
    const {books} = this.props;
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

const mapStateToProps = ({books}) => {
  return {
    books,
  }
};

const mapDispatchToProps = {
  booksLoaded
};

export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));