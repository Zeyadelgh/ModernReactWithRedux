import BookShow from './BookShow';

export default function BookList({ books }: any) {
  const renderedBooks = books.map((book: any) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className='book-list'>{renderedBooks}</div>;
}
