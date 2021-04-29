import React, { FormEvent, useState } from "react";
import styled from "styled-components";

export interface HeaderProps {
  onInputRequest: Function;
}

const Div = styled.div`
  background-color: #ff812d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: 10vh;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
`;

const InputSearchBar = styled.input`
  width: 82em;
  height: 4em;
  text-align: center;
`;

const SearchBtn = styled.button`
  padding: 1em;
`;

const DivColoumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header: React.FC<HeaderProps> = ({ onInputRequest }) => {
  const [text, setText] = useState("");

  const onInputChange = (input: FormEvent) => {
    input.preventDefault();
    onInputRequest(text);
  };

  return (
    <Div>
      <DivColoumn>
        <h2>Search</h2>
        <h2>Hacker News</h2>
      </DivColoumn>
      <div>
        <form onSubmit={(e) => onInputChange(e)}>
          <InputSearchBar
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search stories by title,url or author"
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </form>
      </div>
      <div>
        <A href="/setting">Settings</A>
      </div>
    </Div>
  );
};

export default Header;
