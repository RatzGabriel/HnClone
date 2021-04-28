import * as React from "react";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <div>
        <h2>Search</h2>
        <h2>Hacker News</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search stories by title,url or author"
        />
      </div>
      <div>
        <h2>Settings</h2>
      </div>
    </div>
  );
};

export default Header;
