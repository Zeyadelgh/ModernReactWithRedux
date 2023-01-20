interface IBookShow {
  book: { id: Number; title: string };
}
export default function BookShow({ book }: IBookShow) {
  return <div className='book-show'>{book.title}</div>;
}
