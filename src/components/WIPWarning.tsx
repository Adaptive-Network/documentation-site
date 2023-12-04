// WIPStatus.js
import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

type WarningItem = {
  warningMessage: string;
  warningHeader: string;
};
const WIPWarning = ({ header, message, url, status_url }) => {
  const colorMode = useColorMode();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh", // Full height of the viewport
      }}
      className="card"
    >
      <h1
        style={{
          color: colorMode.isDarkTheme ? "#fff" : "#000",
          fontSize: "36px",
        }}
      >
        🚧 {header} 🚧
      </h1>
      <div className="padding-bottom--md">{message}</div>
      <div className="padding-bottom--md">
        For updates, follow along on our{" "}
        <a href={status_url} target="_blank">
          dev blog
        </a>
      </div>
      <div className="padding-bottom--md padding-top--lg">
        For support please{" "}
        <a
          href="mailto:hello@theadaptivenetwork.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          reach out to us
        </a>
        🤝
      </div>
    </div>
  );
};

export default WIPWarning;
