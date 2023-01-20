import { useState } from 'react';
import BookCreate from './components/BookCreate';

interface IBooks {
  id: number;
  title: string;
}
export default function App() {
  const [books, setBooks] = useState<IBooks[]>([]);

  const createBook = (title: string) => {
    const updatedBooks = [...books, { id: 123, title }];
    setBooks(updatedBooks);
  };
  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
}
