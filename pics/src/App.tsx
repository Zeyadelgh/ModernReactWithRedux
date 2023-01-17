import searchImages from './api';
import SearchBar from './components/SearchBar';

function App() {
  const handleSubmit = (term: string) => {
    console.log('Do search with', term);
  };
  return <SearchBar onSubmit={handleSubmit} />;
}

export default App;
