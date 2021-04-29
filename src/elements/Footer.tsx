import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 80;
`;

const A = styled.a`
  text-decoration: none;
  padding-left: 1em;
`;

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <A href="/about">About</A>
      <A href="/setting">Setting</A>
      <A href="/help">Help</A>
      <A href="/">Main</A>
    </div>
  );
};

export default Footer;
