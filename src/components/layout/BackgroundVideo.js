import './BackgroundVideo.module.css';

export default function BackgroundVideo({ src }) {
  return (
    <video autoPlay muted loop id='backgroundVideo' src={src} />
  );
}