import "./App.css";
import Footer from "./elements/Footer";
import Header from "./elements/Header";
import StateService from "./StateService";
import styled from "styled-components";
import React, { useState } from "react";

const Div = styled.div`
  background-color: white;
`;

const DivAll = styled.div`
  background-color: #ebe5d3;
  width: 90%;
  margin: 0 auto;
`;

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onInputRequest = (input: string) => {
    setSearchTerm(input);
  };

  return (
    <Div className="App">
      <Header onInputRequest={onInputRequest} />
      <DivAll>
        <StateService searchTerm={searchTerm} />
      </DivAll>
      <DivAll>
        <Footer />
      </DivAll>
    </Div>
  );
}

export default App;
