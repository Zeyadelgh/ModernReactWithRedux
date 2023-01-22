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

  const editBookById = (id: Number, newTitle: string) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

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
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
