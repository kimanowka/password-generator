import React, { useState } from "react";
import "./App.css";

const selectArray = [8, 9, 10, 11, 12];
let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&()_+?:{}[]";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [symbol, setSymbol] = useState(false);

  const handlePasswordGenerator = () => {
    let currentPassword = "";

    let copyChars = chars;
    if (symbol) {
      copyChars += symbols;
    }
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * copyChars.length);
      currentPassword += copyChars[randomNumber];
    }
    setPassword(currentPassword);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
  };
  return (
    <div className="container">
      <div className="content">
        <div className="title">
          <h2>Генератор паролей</h2>
        </div>
        <input
          className="input"
          disabled
          value={password}
          placeholder="Здесь появится ваш пароль"
        />
        <select
          className="input"
          onChange={(e) => {
            setLength(Number.parseInt(e.target.value));
          }}
        >
          {selectArray.map((select) => {
            return (
              <option key={select} value={select}>
                {select}
              </option>
            );
          })}
        </select>
        <span>Добавить спец символы</span>
        <input
          type="checkbox"
          onChange={() => {
            setSymbol((prev) => !prev);
          }}
        />
        <button
          type="button"
          className="button"
          onClick={handlePasswordGenerator}
        >
          Сгенерировать пароль
        </button>
        <button type="button" className="button" onClick={handleCopyPassword}>
          Скопировать пароль
        </button>
      </div>
    </div>
  );
};

export default App;
