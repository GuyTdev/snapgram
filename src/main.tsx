import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "./lib/react-query/QueryProvider";
import { AuthProvider } from "./context/AuthContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);
root.render(
  <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
);
