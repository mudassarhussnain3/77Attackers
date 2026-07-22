export default function LazyImage({
  src,
  alt,
  width,
  height,
  priority = false,
  style,
  ...rest
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      style={{ width: "100%", height: "auto", ...style }}
      {...rest}
    />
  );
}
