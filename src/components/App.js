import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"
 
  function handleDarkModeClick() {
    setIsDarkMode((mode) => !mode);
  }
  return (
    <div className={appClass} data-testid="app-root">
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
