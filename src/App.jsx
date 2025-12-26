import { useState } from "react";

let nextId = 0;

export default function AddItem() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  const addArtists = () => {
    setArtists([...artists, { id: nextId++, name }]);
    setName("");
  };

  const handleDeleteItem = (deleteId) => {
    setArtists(artists.filter((a) => a.id !== deleteId));
  };

  const handleReverseClick = () => {
    setArtists([...artists].reverse());
  };

  // 👉 Edit শুরু
  const handleEditItem = (artist) => {
    setEditingId(artist.id);
    setEditingName(artist.name);
  };

  // 👉 Save
  const handleSave = () => {
    setArtists(
      artists.map((a) => (a.id === editingId ? { ...a, name: editingName } : a))
    );
    setEditingId(null);
    setEditingName("");
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>

      <button onClick={handleReverseClick}>Reverse</button>

      <br />
      <br />

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addArtists}>Add</button>

      <br />
      <br />

      {artists.map((artist) => (
        <ul key={artist.id}>
          <li>
            {editingId === artist.id ? (
              <>
                <input
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                {artist.name}
                <button onClick={() => handleDeleteItem(artist.id)}>
                  Delete
                </button>
                <button onClick={() => handleEditItem(artist)}>Edit</button>
              </>
            )}
          </li>
        </ul>
      ))}
    </>
  );
}
