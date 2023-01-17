import axios from 'axios';

const searchImages = async (term: string) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID eFObK5oCQB20K-ImxUI0tAAyI_fBn8GpUJmp9rcCKvk',
    },
    params: {
      query: { term },
    },
  });
  return response.data.results;
};

export default searchImages;
