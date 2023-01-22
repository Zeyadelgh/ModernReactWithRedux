import BookShow from './BookShow';
import { IBooks } from '../App';
import { AppFunctions } from '../App';

export interface IBookList {
  books: IBooks[];
  onDelete: (id: Number) => void;
}
export default function BookList({ books, onDelete }: IBookList) {
  const renderedBooks = books.map((book: IBooks) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} />;
  });
  return <div className='book-list'>{renderedBooks}</div>;
}
