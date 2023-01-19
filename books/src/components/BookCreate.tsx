import { useState } from 'react';
interface AppProps {
  onCreate: (title: string) => void;
}
export default function BookCreate({ onCreate }: AppProps) {
  const [title, setTitle] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} />
      <button>Create!</button>
    </form>
  );
}
