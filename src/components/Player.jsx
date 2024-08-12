import React, { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);

  const [namePlayer, setNamePlayer] = useState(name);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, namePlayer);
    }
  };

  const handleChange = (e) => {
    setNamePlayer(e.target.value);
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" value={namePlayer} onChange={handleChange} />
        ) : (
          <span className="player-name">{namePlayer}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
