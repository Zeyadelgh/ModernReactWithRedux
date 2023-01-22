import { IBooks } from '../App';

export interface IBookShow {
  book: IBooks;
  onDelete: (id: Number) => void;
}
export default function BookShow({ book, onDelete }: IBookShow) {
  const handleClick = () => {
    onDelete(book.id);
  };
  return (
    <div className='book-show'>
      {book.title}
      <div className='actions'>
        <button className='delete' onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
