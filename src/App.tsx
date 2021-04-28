import React, { useState } from "react";
import StateService from "./StateService";
import "./App.css";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState<any>();

  const onInputRequest = (input: string) => {
    setSearchTerm(input);
  };

  return (
    <div className="App">
      <Header onInputRequest={onInputRequest} />
      <StateService searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
