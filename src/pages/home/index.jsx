import React, { useEffect } from "react";
import "./index.css";
import style from "./style.module.less";
import imgUrl from "@/assets/modernjs-cover.png";

export default () => {
  return (
    <>
      <div className={`container ${style.container}`}>
        <main>
          <div className="logo">
            <img src={imgUrl} width="300" alt="Modern.js Logo" />
          </div>
          <div className="img"></div>
          <p className="description">
            Get started by editing <code className="code">src/Index.jsx</code>
          </p>
          <div className="grid">
            <a href="https://modernjs.dev/docs/start" className="card">
              <h2>Quick Start</h2>
            </a>
            <a href="https://modernjs.dev/docs/guides" className="card">
              <h2>Handbook</h2>
            </a>
            <a href="https://modernjs.dev/docs/apis" className="card">
              <h2>API Reference </h2>
            </a>
            <a
              href="https://modernjs.dev/docs/community"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h2>Community </h2>
            </a>
          </div>
        </main>
        <footer className="footer">
          <a
            href="https://modernjs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Modern.js
          </a>
        </footer>
      </div>
    </>
  );
};
