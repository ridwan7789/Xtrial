export const VideoEmbed = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
        <iframe
          src="https://embed.xtrial.live/e?mintId=1nc1nerator11111111111111111111111111111111&pump=1&controls=1&border=0"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="XTrial Stream"
        />
        {/* Glow effect */}
        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  );
};
