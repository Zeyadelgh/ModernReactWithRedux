interface AppProps {
  image: any;
}
export default function ImageShow({ image }: AppProps) {
  return (
    <div>
      <img alt={image.alt_description} src={image.urls.small} />
    </div>
  );
}
