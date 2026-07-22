import { useEffect, useRef, useState } from "react";

// `priority`: hero videos (above the fold) load immediately, autoplay-ready.
// Non-priority videos (e.g. the drone/global-reach break) render only their
// poster frame until an IntersectionObserver confirms the section is near
// the viewport, so the browser never fetches video bytes the user may
// never scroll to.
export default function LazyVideo({
  sources,
  poster,
  priority = false,
  style,
  className,
}) {
  const wrapperRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    if (priority || shouldLoad || !wrapperRef.current) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [priority, shouldLoad]);

  return (
    <div ref={wrapperRef} className={className} style={{ position: "relative", ...style }}>
      {shouldLoad ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload={priority ? "auto" : "metadata"}
          poster={poster}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      ) : (
        poster && (
          <img
            src={poster}
            alt=""
            loading="lazy"
            decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )
      )}
    </div>
  );
}
