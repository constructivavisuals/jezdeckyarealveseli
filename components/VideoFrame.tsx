export default function VideoFrame() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-navy-100">
      <video
        className="h-full w-full object-cover"
        poster="/video/poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/video/areal-1080p.mp4" type="video/mp4" />
        Váš prohlížeč nepodporuje přehrávání videa.
      </video>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-navy-900/45 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
        Prohlídka z výšky
      </span>
    </div>
  );
}
