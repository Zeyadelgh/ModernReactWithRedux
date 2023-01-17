import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
  const handleSubmit = async (term: string) => {
    const result = await searchImages(term);
    <ImageList images={result} />;
  };
  return <SearchBar onSubmit={handleSubmit} />;
}

export default App;
