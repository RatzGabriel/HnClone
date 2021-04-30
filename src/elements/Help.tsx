import Footer from "../elements/Footer";
import styled from "styled-components";
import React, { ReactElement } from "react";

const Div = styled.div`
  background-color: #ff812d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  height: 10vh;
`;

const DivAll = styled.div`
  background-color: #ebe5d3;
  width: 90%;
  margin: 0 auto;
  height: 100vh;
`;

const Help: React.FC = (): ReactElement => {
  return (
    <DivAll>
      <Div>
        <h2>Search</h2>
        <h2>Hacker News</h2>
      </Div>
      <h2>Advanced search syntax</h2>
      <p>Use " to match a particular sequence of terms "search engine"</p>
      <p>
        Use - to ensure a word won't appear in the result set search
        -optimization,
      </p>
      <p>Use author:USERNAME or by:USERNAME to filter by author,</p>
      <p>Use story:ID to filter by story,</p>
      <p>Use points NUMBER or points NUMBER to filter by points</p>
      <Footer />
    </DivAll>
  );
};

export default Help;
