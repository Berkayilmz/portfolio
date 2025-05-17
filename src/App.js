import React from "react";
import { Provider } from "./components/ui/provider";
import './App.css';
import AppNavigator from './navigation/AppNavigator';
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <Provider>
      <LanguageProvider>
        <AppNavigator />
      </LanguageProvider>
    </Provider>
  );
}

export default App;