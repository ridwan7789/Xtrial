export const VideoEmbed = () => {
  return (
    <div className="video-container w-full max-w-4xl mx-auto aspect-video">
      <iframe
        src="https://pump.fun/coin/1nc1nerator11111111111111111111111111111111?tab=stream"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="XTRIAL Live Stream on Pump.fun"
      />
    </div>
  );
};
