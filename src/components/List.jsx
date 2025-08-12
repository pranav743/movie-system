import Avatar from "./Avatar.jsx";
import Badge from "./Badge.jsx";

export default function List({ items }) {
  return (
    <ul className="list">
      {items.map((p) => (
        <li key={p.id} className="list_item">
          <Avatar src={p.img} alt={p.name} size="md" />
          <div className="list_meta">
            <span>{p.name}</span>
            <Badge tone={p.online ? "success" : "neutral"}>
              {p.online ? "Online" : "Offline"}
            </Badge>
          </div>
        </li>
      ))}
    </ul>
  );
}
