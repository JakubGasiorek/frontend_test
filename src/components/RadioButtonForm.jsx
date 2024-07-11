export default function RadioButtonForm({ handleRadioChange }) {
  return (
    <div className="main__blocks-block1-form" role="radiogroup">
      <label className="radio-container" htmlFor="option1" id="labelOption1">
        <input
          type="radio"
          id="option1"
          name="options"
          value="1"
          onChange={handleRadioChange}
          aria-labelledby="labelOption1"
          tabIndex="0"
        />
        Opcja pierwsza
      </label>

      <label className="radio-container" htmlFor="option2" id="labelOption2">
        <input
          type="radio"
          id="option2"
          name="options"
          value="2"
          onChange={handleRadioChange}
          aria-labelledby="labelOption2"
          tabIndex="0"
        />
        Opcja druga
      </label>

      <label className="radio-container" htmlFor="option3" id="labelOption3">
        <input
          type="radio"
          id="option3"
          name="options"
          value="random"
          onChange={handleRadioChange}
          aria-labelledby="labelOption3"
          tabIndex="0"
        />
        Opcja losowa
      </label>
    </div>
  );
}
