import './ImageList.css';
import ImageShow from './ImageShow';

interface AppProps {
  images: string[];
}

export default function ImageList({ images }: AppProps) {
  const renderedImages = images.map((image: any) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className='image-list'>{renderedImages}</div>;
}
