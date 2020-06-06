import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { App } from "../components";
import { Qr } from "../components";
import { Ssid } from "../components";
import { Pass } from "../components";
import { Print } from "../components";

export default function Root() {
  const [ssid, setSsid] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const regex = new RegExp("#/([^/]+)/([^/]+)");
      const match = regex.exec(window.location.hash);
      if (match !== null) {
        setSsid(match[1]);
        setPass(match[2]);
      }
    }
  });

  return (
    <App>
      <Helmet>
        <title>WiFi</title>
      </Helmet>

      <div className="container my-4">
        <header className="my-4">
          <h1>Wi-Fi</h1>
        </header>

        <main id="print-area">
          <section>
            <Qr ssid={ssid} pass={pass} size={180} />
          </section>

          <section className="mt-3">
            <Ssid ssid={ssid} onChange={setSsid} />
            <Pass pass={pass} onChange={setPass} />
          </section>
        </main>

        <footer className="mt-4">
          <Print />
        </footer>
      </div>
    </App>
  );
}
