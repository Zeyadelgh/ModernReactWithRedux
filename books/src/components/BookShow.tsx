import { IBooks } from '../App';
import { useState } from 'react';
import BookEdit from './BookEdit';

export interface IBookShow {
  book: IBooks;
  onDelete: (id: Number) => void;
  onEdit: (id: Number, newTitle: string) => void;
}
export default function BookShow({ book, onDelete, onEdit }: IBookShow) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id: Number, newTitle: string) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className='book-show'>
      <div>{content}</div>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
