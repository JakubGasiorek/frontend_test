import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const [myName, setMyName] = useState("");

  const addName = (newName) => {
    setMyName(newName);
  };

  return (
    <div>
      <Header myName={myName} />
      <MainContent />
      <Footer addName={addName} handleReset={() => setMyName("")} />
    </div>
  );
}

export default App;
