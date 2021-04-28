import React, { FormEvent, useState } from "react";

export interface HeaderProps {
  onInputRequest: Function;
}

const Header: React.FC<HeaderProps> = ({ onInputRequest }) => {
  const [text, setText] = useState("");

  const onInputChange = (input: FormEvent) => {
    input.preventDefault();
    onInputRequest(text);
  };

  return (
    <div>
      <div>
        <h2>Search</h2>
        <h2>Hacker News</h2>
      </div>
      <div>
        <form onSubmit={(e) => onInputChange(e)}>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search stories by title,url or author"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <h2>Settings</h2>
      </div>
    </div>
  );
};

export default Header;
