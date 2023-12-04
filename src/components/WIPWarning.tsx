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
        height: "60vh", // Full height of the viewport
      }}
      className="hazard-pattern card"
    >
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
        className="card padding--lg margin--lg"
      >
        <h1
          style={{
            color: "black",
            fontSize: "36px",
          }}
        >
          🚧 {header} 🚧
        </h1>
        <div className="padding-bottom--md">{message}</div>
        <div className="padding-bottom--md">
          For updates, follow along on our{" "}
          <a
            href={status_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#c7b90e",
            }}
          >
            dev blog
          </a>
        </div>
        <div className="padding-bottom--md padding-top--lg">
          For support please{" "}
          <a
            href="mailto:hello@theadaptivenetwork.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#c7b90e",
            }}
          >
            reach out to us
          </a>{" "}
          🤝
        </div>
      </div>
    </div>
  );
};

export default WIPWarning;
