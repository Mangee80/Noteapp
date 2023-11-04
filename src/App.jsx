import React from "react";
import NotesappNav from "./components/NotesappNav.jsx";
import NotesappBody from "./components/NotesappBody.jsx";
const App = () => {
  return (
    <div style={{display: "flex"}}>
      <NotesappNav />
      <NotesappBody />
    </div>        
  )
}

export default App;
