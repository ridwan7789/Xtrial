export const VideoEmbed = () => {
  return (
    <div className="video-container w-full max-w-4xl mx-auto aspect-video">
      <iframe
        src="https://embed.xtrial.live/e?mintId=1nc1nerator11111111111111111111111111111111&pump=1&controls=1&border=0"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="XTRIAL Live Stream"
      />
    </div>
  );
};
