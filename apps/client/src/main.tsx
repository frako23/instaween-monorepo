import { StrictMode } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/jolly-lodger";
import { UserProvider } from "./Context/UserContext.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <UserProvider>
          <App />
        </UserProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode >
);
