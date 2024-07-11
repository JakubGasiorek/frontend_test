import { useState, useEffect } from "react";
import RadioButtonForm from "./RadioButtonForm";
import data from "/src/data/content.json";

export default function MainContent() {
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
      const remainingContent = contentList.filter(
        (content) => !usedContent.includes(content)
      );
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

    if (!usedContent.includes(newContent)) {
      setUsedContent((prevContent) => [...prevContent, newContent]);
    }
  };

  return (
    <main>
      <div className="main__header">
        <h1 className="main__text">Nagłówek H1</h1>
        <hr className="main__hr" />
      </div>
      <div className="main__blocks">
        <div className="main__blocks-block1">
          <h2>Blok pierwszy</h2>
          <RadioButtonForm handleRadioChange={handleRadioChange} />
        </div>
        <div className="main__blocks-block2">
          <h2>Blok drugi</h2>
          <div className="main__blocks-block2-buttons">
            <button
              className="main__blocks-block2-button"
              onClick={handleReplace}
            >
              Zastąp
            </button>
            <button
              className="main__blocks-block2-button"
              onClick={handleAppend}
            >
              Doklej
            </button>
          </div>
        </div>
        <div className="main__blocks-block3">
          <h2>Blok z długą nazwą która sama się przytnie ...</h2>
          <div className="main__blocks-block3-text">
            {usedContent.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
