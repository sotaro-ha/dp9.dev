import React, { useState } from "react";

const Quiz = (props) => {
  const article = props.article;
  const setTestedPages = props.setTestedPages;
  const pathname = props.pathname;
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const handleSubmit = () => {
    if (selectedOption === null) return;
    const correct = article.quiz.answer - 1 === selectedOption;
    setIsCorrect(correct);
    if (correct) {
      if (typeof window !== "undefined") {
        const testedPages =
          JSON.parse(window.localStorage.getItem("testedPages")) || {};
        if (!testedPages.hasOwnProperty(pathname)) {
          testedPages[pathname] = true;
        }
        window.localStorage.setItem("testedPages", JSON.stringify(testedPages));
        setTestedPages(testedPages);
      }
    }
  };

  return (
    <div className="shadow-md px-8 py-4">
      <h2 className="font-bold text-2xl">QUIZ</h2>
      <h3 className="text-xl">{article.quiz.question}</h3>
      <form>
        {article.quiz.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="quiz"
              value={index}
              onChange={() => setSelectedOption(index)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </form>
      <button onClick={handleSubmit}>回答する</button>
      {isCorrect === true && <p>正解です！</p>}
      {isCorrect === false && <p>残念、不正解です。</p>}
    </div>
  );
};

export default Quiz;
