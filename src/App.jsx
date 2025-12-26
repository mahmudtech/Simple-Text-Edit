import { useState } from "react";
import { getAllData } from "./data";

export default function App() {
  const [users, setUsers] = useState(getAllData());
  const [name, setName] = useState("");
  const [searchText, setSearchText] = useState("");
  const handleAddName = () => {
    const newName = {
      id: crypto.randomUUID(),
      name: name,
    };

    setUsers([...users, newName]);

    setName("");
  };
  const handleDeleteItem = (deleteId) => {
    const affterDelete = users.filter((user) => user.id !== deleteId);
    setUsers(affterDelete);
  };

  const filterUser = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );
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
      <br />
      <div>
        <input
          type="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {users.length === 0 ? (
        <>
          <p>No data found</p>
        </>
      ) : filterUser.length === 0 ? (
        <>No data found</>
      ) : (
        <>
          <ul>
            {filterUser
              .filter((user) =>
                user.name.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((user) => {
                return (
                  <li key={user.id}>
                    {user.name}{" "}
                    <button onClick={() => handleDeleteItem(user.id)}>
                      delete
                    </button>
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
}
