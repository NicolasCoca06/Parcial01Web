import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { IntlProvider } from "react-intl";
import localeEs from "./locale/es";
import localeEn from "./locale/en";

import { createRoot } from 'react-dom/client';

function Root() {

  let lang = navigator.language.split("-")[0];
  const locals = {
    "es": localeEs,
    "en": localeEn
  }

  return (
    <IntlProvider messages={locals[lang]? locals[lang]: localeEn}>
      <div>
      <p>Detected: {navigator.language}</p>
        <App />
      </div>
    </IntlProvider>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Root />);