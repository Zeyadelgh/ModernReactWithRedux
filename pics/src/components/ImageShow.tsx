interface AppProps {
  image: any;
}
export default function ImageShow({ image }: AppProps) {
  return <div>{image.alt_description}</div>;
}
