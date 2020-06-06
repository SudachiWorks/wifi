import React from "react";
import { App } from "../components";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <App>
      <Helmet>
        <title>WiFi</title>
      </Helmet>

      <main className="container">
        <h1 className="my-4 text-center">Not found.</h1>
      </main>
    </App>
  );
}
