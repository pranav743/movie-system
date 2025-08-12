export default function Avatar({ src, alt = "avatar", size = "md", style }) {
  const sizeClass =
    size === "sm" ? "avatar--sm" : size === "md" ? "avatar--md" : "avatar--lg";

  return (
    <img src={src} alt={alt} className={`avatar ${sizeClass}`} style={style} />
  );
}
