import React from "react";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <a href="/about">About</a>
      <a href="/setting">Setting</a>
      <a href="/help">Help</a>
      <a href="/api">API Documentation</a>
      <a href="/news">Hacker News</a>
      <a href="/fork">Fork/Contribute</a>
      <a href="/">Cool</a>
    </div>
  );
};

export default Footer;
