import { useState } from "react";
import { getAllData } from "./data";

export default function App() {
  const [users, setUsers] = useState(getAllData());
  const [name, setName] = useState("");
  const handleAddName = () => {
    const newName = {
      id: crypto.randomUUID(),
      name: name,
    };

    setUsers([...users, newName]);

    setName("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddName}>Add</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
