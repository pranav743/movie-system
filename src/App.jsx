import "./App.css";
import Avatar from "./components/Avatar.jsx";
import Badge from "./components/Badge.jsx";
import List from "./components/List.jsx";
import Stepper from "./components/Stepper.jsx";
import { useState } from "react";
import AuthForm from "./components/AuthForm.jsx";

export default function App() {
  const user = {
    name: "Ada Lovelace",
    img: "https://i.pravatar.cc/100?img=5",
    online: true,
  };

  const [value, setValue] = useState(0);

  const people = [
    {
      id: "p1",
      name: "Grace Hopper",
      img: "https://i.pravatar.cc/100?img=6",
      online: false,
    },
    {
      id: "p2",
      name: "E. Dijkstra",
      img: "https://i.pravatar.cc/100?img=7",
      online: true,
    },
    {
      id: "p3",
      name: "Donald Knuth",
      img: "https://i.pravatar.cc/100?img=8",
      online: false,
    },
  ];

  return (
    <>
      <h1>React Basics – Session 1</h1>
      <Stepper value={value} setValue={setValue}></Stepper>
      <AuthForm></AuthForm>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar
          src={user.img}
          alt={user.name}
          size="lg"
          style={{ border: "3px solid #111" }}
        />
        <div>
          <div className="section-title">{user.name}</div>
          {user.online ? (
            <Badge tone="success">Online</Badge>
          ) : (
            <Badge tone="neutral">Offline</Badge>
          )}
        </div>
      </div>

      <div className="section-title">People</div>
      <List items={people} />
    </>
  );
}
