import * as React from "react";
import Footer from "../elements/Footer";
import styled from "styled-components";

export interface AboutProps {}

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
const About: React.FC<AboutProps> = () => {
  return (
    <DivAll>
      <Div>
        <h2>Search</h2>
        <h2>Hacker News</h2>
      </Div>
      <div>
        <p>About</p>
      </div>
      <div>
        <p>
          HN Search provides real-time full-text search for the HackerNews
          community site. Source code is available on GitHub. The search backend
          is implemented using Algolia instant search engine.
        </p>
        <h2>How it works</h2>
        <p>
          Items are updated in real-time using official HackerNews API. Data is
          indexed on 3 different servers for high availability, hosted in
          Beauharnois, Canada.
        </p>
        <h2>Credits</h2>
        <p>
          Special thanks to Firebase, Octopart and YC teams for providing us the
          data.
        </p>
      </div>
      <div>
        <p>all links</p>
      </div>
      <Footer />
    </DivAll>
  );
};

export default About;
