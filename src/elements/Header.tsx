import React,{useState} from "react";

export interface HeaderProps {
  onInputRequest: Function;
}

const Header: React.FC<HeaderProps> = ({ onInputRequest }) => {

    const []



  return (
    <div>
      <div>
        <h2>Search</h2>
        <h2>Hacker News</h2>
      </div>
      <div>
        <form onSubmit={()=>}>
          <input
            type="text"
            placeholder="Search stories by title,url or author"
          />
        </form>
      </div>
      <div>
        <h2>Settings</h2>
      </div>
    </div>
  );
};

export default Header;
