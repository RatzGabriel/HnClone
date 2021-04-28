import React from "react";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <a href="#">About</a>
      <a href="#">Setting</a>
      <a href="#">Help</a>
      <a href="#">API Documentation</a>
      <a href="#">Hacker News</a>
      <a href="#">Fork/Contribute</a>
      <a href="#">Cool</a>
    </div>
  );
};

export default Footer;
