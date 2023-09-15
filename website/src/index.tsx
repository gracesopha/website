import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import Nav from "./Nav";
import { Footer } from "./template/Footer";

const rootElement = document.getElementById("root")!;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <Nav />
    <Footer title="grace" />
    </BrowserRouter>
  </StrictMode>
);


