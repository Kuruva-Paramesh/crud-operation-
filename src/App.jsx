import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail]= useState("");
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");

  function Add() {
    if (name.trim() !== "" && email.trim() !== "") {
      setUsers([...users, { name, email }]);
      setName("");
      setEmail("");
    }
  }

  function Delete(i) {
    const updated = users.filter((_, index) => index !== i);
    setUsers(updated);
  }

  function Edit(i) {
    setName(users[i].name);
    setEmail(users[i].email);
    setEdit(i);
  }

  function Save() {
    const updated = users.map((v, i) =>
      i === edit ? { name, email } : v
    );
    setUsers(updated);
    setEdit(null);
    setName("");
    setEmail("");
  }

  const filtered = users.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="title">User Management</h2>

      <div className="form">
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        /><br/>

        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        /><br/>

        {edit === null ? (
          <button className="addBtn" onClick={Add}>
            Add User
          </button>
        ) : (
          <button className="saveBtn" onClick={Save}>
            Save Changes
          </button>
        )}
      </div>

      <input
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search by name..."
      />

      <div className="cardContainer">
        {filtered.length === 0 ? (
          <p className="empty">No users found...</p>
        ) : (
          filtered.map((v, i) => (
            <div key={i} className="card">
              <div>
                <strong>{v.name}</strong>
                <p>{v.email}</p>
              </div>

              <div>
                <button
                  className="editBtn"
                  onClick={() => Edit(i)}
                >
                  Edit
                </button>

                <button
                  className="deleteBtn"
                  onClick={() => Delete(i)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}