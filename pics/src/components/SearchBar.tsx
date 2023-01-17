import { useState } from 'react';
interface AppProps {
  onSubmit: (params: any) => any;
}
export default function SearchBar({ onSubmit }: AppProps) {
  const [term, setTerm] = useState('');
  const handleClick = () => {
    onSubmit(term);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value.replace(/[a-z]/, ''));
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
        <div>{term.length < 3 && 'Term must be longer'}</div>
      </form>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}
