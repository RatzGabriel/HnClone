import React, { useState } from "react";
import StateService from "./StateService";
import "./App.css";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Settings from "./elements/Settings";
import RouterClass from "./components/Router";

function App() {
  const [searchTerm, setSearchTerm] = useState<any>();

  const onInputRequest = (input: string) => {
    setSearchTerm(input);
  };

  return (
    <div className="App">
      <Header onInputRequest={onInputRequest} />
      <StateService searchTerm={searchTerm} />
      <Settings />
      <Footer />
    </div>
  );
}

export default App;
