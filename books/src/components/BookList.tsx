import BookShow from './BookShow';
import { IBooks } from '../App';

export interface IBookList {
  books: IBooks[];
  onDelete: (id: Number) => void;
  onEdit: (id: Number, newTitle: string) => void;
}
export default function BookList({ books, onDelete, onEdit }: IBookList) {
  const renderedBooks = books.map((book: IBooks) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <div className='book-list'>{renderedBooks}</div>;
}
