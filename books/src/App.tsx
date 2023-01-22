import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export interface IBooks {
  id: number;
  title: string;
}
export interface AppFunctions {
  onDelete: (id: Number) => void;
}
export default function App() {
  const [books, setBooks] = useState<IBooks[]>([]);

  const deleteBookById = (id: Number) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const createBook = (title: string) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
