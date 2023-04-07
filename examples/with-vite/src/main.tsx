import React from "react";
import ReactDOM from "react-dom/client";
import { ProviderWrapper } from "react-providers-wrapper";

function App() {
  return <div>Hello world!</div>;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProviderWrapper providers={[{ provider: React.StrictMode }]}>
    <App />
  </ProviderWrapper>
);
