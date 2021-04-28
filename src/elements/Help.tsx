import React from "react";

export interface HelpProps {}

const Help: React.FC<HelpProps> = () => {
  return (
    <div>
      <h2>Advanced search syntax</h2>
      <p>Use " to match a particular sequence of terms "search engine"</p>
      <p>
        Use - to ensure a word won't appear in the result set search
        -optimization,
      </p>
      <p>Use author:USERNAME or by:USERNAME to filter by author,</p>
      <p>Use story:ID to filter by story,</p>
      <p>Use points NUMBER or points NUMBER to filter by points</p>
    </div>
  );
};

export default Help;
