import { useState } from 'react';

interface AppProps {
  images: (params: any) => any;
}
export default function ImageList({ images }: AppProps) {
  const [imageList, setImageList] = useState([]);
  return <div>ImageList</div>;
}
