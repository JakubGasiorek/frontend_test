import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import data from "/src/data/content.json";

export default function App() {
  const [myName, setMyName] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [usedContent, setUsedContent] = useState([]);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    setContentList(data.content);
  }, []);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleReplace = () => {
    let newContent = "";
    if (selectedOption === "1") {
      newContent = contentList[0];
    } else if (selectedOption === "2") {
      newContent = contentList[1];
    } else if (selectedOption === "random") {
      // Filtracja zawartości nie użytej
      const remainingContent = contentList.filter(
        (content) => !usedContent.includes(content)
      );
      // Losowanie nowej zawartości spośród pozostałych
      newContent =
        remainingContent[Math.floor(Math.random() * remainingContent.length)];
    }
    setUsedContent([newContent]);
  };

  const handleAppend = () => {
    let newContent = "";
    if (selectedOption === "1") {
      newContent = contentList[0];
    } else if (selectedOption === "2") {
      newContent = contentList[1];
    } else if (selectedOption === "random") {
      const remainingContent = contentList.filter(
        (content) => !usedContent.includes(content)
      );
      if (remainingContent.length === 0) {
        alert("Wszystkie dane zostały użyte");
        return;
      }
      newContent =
        remainingContent[Math.floor(Math.random() * remainingContent.length)];
    }
    // Dodanie nowej zawartości do użytej zawartości, jeśli nie jest już użyta
    if (!usedContent.includes(newContent)) {
      setUsedContent((prevContent) => {
        const updatedContent = [...prevContent, newContent];
        // Utworzenie zaktualizowanej listy zawartości z nową zawartością, sortowanie alfabetycznie
        return [...updatedContent].sort((a, b) =>
          a.localeCompare(b, "pl", { sensitivity: "base" })
        );
      });
    }
  };

  // Obsługa resetowania stanów aplikacji
  const handleReset = () => {
    setSelectedOption(null);
    setUsedContent([]);
    setMyName("");
  };

  return (
    <div>
      <Header myName={myName} />
      <MainContent
        selectedOption={selectedOption}
        usedContent={usedContent}
        setUsedContent={setUsedContent}
        handleRadioChange={handleRadioChange}
        handleReplace={handleReplace}
        handleAppend={handleAppend}
      />
      <Footer
        addName={() => setMyName("Jakub Gąsiorek")}
        handleReset={handleReset}
      />
    </div>
  );
}
