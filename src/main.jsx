import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ExamsProvider } from "./context/ExamsContext";
import { LessonsProvider } from "./context/LessonsContext";

ReactDOM.createRoot(document.getElementById("root")).render(

    <AuthProvider>
      <ExamsProvider>
      <LessonsProvider>
        <App />
        </LessonsProvider>
      </ExamsProvider>
    </AuthProvider>

);
