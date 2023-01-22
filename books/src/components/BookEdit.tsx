import { useState } from 'react';
import { IBooks } from '../App';

export interface IBookEdit {
  book: IBooks;
  onEdit?: (id: Number, newTitle: string) => void;
  onSubmit: (id: Number, newTitle: string) => void;
}
export default function BookEdit({ book, onEdit, onSubmit }: IBookEdit) {
  const [title, setTitle] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <form onSubmit={handleSubmit} className='book-edit'>
      <label>Title</label>
      <input
        placeholder={book.title}
        className='input'
        value={title}
        onChange={handleChange}
      />
      <button className='button is-primary'> Save</button>
    </form>
  );
}
