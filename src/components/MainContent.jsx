import RadioButtonForm from "./RadioButtonForm";

export default function MainContent({
  selectedOption,
  usedContent,
  handleRadioChange,
  handleReplace,
  handleAppend,
}) {
  return (
    <main>
      <div className="main__header">
        <h1 className="main__text">Nagłówek H1</h1>
        <hr className="main__hr" />
      </div>
      <div className="main__blocks">
        <div className="main__blocks-block1">
          <h2>Blok pierwszy</h2>
          <RadioButtonForm
            handleRadioChange={handleRadioChange}
            selectedOption={selectedOption}
          />
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
