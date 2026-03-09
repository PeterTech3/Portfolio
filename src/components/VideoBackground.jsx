export const VideoBackground = ({ src }) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover opacity-50 -z-1"
      style={{ zIndex: 0 }} // Lo ponemos en 0 o -1
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};