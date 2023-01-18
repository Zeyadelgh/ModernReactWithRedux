import ImageShow from './ImageShow';

interface AppProps {
  images: string[];
}
export default function ImageList({ images }: AppProps) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />;
  });
  return <div>{renderedImages}</div>;
}
