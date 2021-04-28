import React from "react";
import StateService from "./StateService";
import "./App.css";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <StateService />
      <Footer />
    </div>
  );
}

export default App;
