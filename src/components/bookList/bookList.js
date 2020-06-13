import React, {Component} from 'react';
import BookListItem from "./bookListItem/bookListItem";

class BookList extends Component {
  render() {
    const {books} = this.props;
    return (
      <div>
        <ul>
          {
            books.map(book => {
              return (
                <li>
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

export default BookList;