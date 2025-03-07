import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from 'react-redux'; // Import Provider
import { store } from "./store.tsx";
import "./bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
  <Provider store={store}> {/* Wrap the App component with the Provider */}
    <App />
  </Provider>,
  </StrictMode>
);
