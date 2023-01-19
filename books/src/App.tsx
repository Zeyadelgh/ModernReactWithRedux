import { useState } from 'react';
import BookCreate from './components/BookCreate';
export default function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title: string) => {
    console.log('Need to add book with: ', title);
  };
  return (
    <div>
      <form>
        <label>Add a Book</label>
        <BookCreate onCreate={createBook} />
      </form>
    </div>
  );
}
