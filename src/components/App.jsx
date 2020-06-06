import React from "react";
import { Helmet } from "react-helmet";

import "../styles/application.scss";

export function App({ children }) {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-168672716-1"
        />
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-168672716-1');
        `}</script>
      </Helmet>
      {children}
    </>
  );
}
