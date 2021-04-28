import * as React from "react";
import Footer from "../elements/Footer";
export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
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
        <a href="#">Hacker News</a>
        <a href="#">Algolia</a>
        <a href="#">Firebase</a>
        <a href="#">Octopart</a>
        <a href="#">Algolia REST API</a>
        <a href="#">AlgoliaSearch Rails</a>
      </div>
      <Footer />
    </div>
  );
};

export default About;
