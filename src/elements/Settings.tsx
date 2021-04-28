import React from "react";
import Footer from "./Footer";

export interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  return (
    <div>
      <div>
        <p>Settings</p>
        <div>
          <p>Style</p>
          <select name="Style" id="">
            <option value="">Default</option>
            <option value="">Experimental</option>
          </select>
          <p>Hits per page</p>
          <select name="Hits per page" id="">
            <option value="30">Default</option>
            <option value="20">Experimental</option>
          </select>
        </div>
      </div>
      <div>
        <h2>Display options</h2>
        <select name="" id="">
          <option value="">Stories</option>
          <option value="">All</option>
          <option value="">Comments</option>
        </select>
        <select name="" id="">
          <option value="">Most popular first</option>
          <option value="">Most recent first</option>
        </select>
        <select name="" id="">
          <option value="">Forever</option>
          <option value="">Last 24h</option>
        </select>
      </div>
      <div>
        <h2>Ranking options</h2>
        <div>
          <p>Use the story text for search</p>
          <input type="checkbox" />
        </div>
        <div>
          <p>Use the author's username for search</p>
          <input type="checkbox" />
        </div>
        <div>
          <p>Typo-tolerance</p>
          <input type="checkbox" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
