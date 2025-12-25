import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Milon Hobe Kotodine");
  const [isEditing, setIsEditing] = useState(false);

  const handleTextUpdate = (e) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
  };
  return isEditing ? (
    <>
      <input type="text" value={name} onChange={handleTextUpdate} />
      <button onClick={handleSave}>Save</button>
    </>
  ) : (
    <>
      {" "}
      <p>
        {name}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </p>
    </>
  );
}
