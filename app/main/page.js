// 파일 최상단에 추가
"use client";

import Container from "@/components/Container";
import React, { useState } from "react";
import quizData from "../data/quiz.json";

function Button({ children, onClick }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center bg-white w-[315px] h-[150px] rounded-[20px] text-[22px] text-[#585858] font-bold leading-[32px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Main() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNextQuestion = () => {
    if (currentIdx < quizData.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  return (
    <Container>
      <div className="flex flex-1 items-center h-[40%] text-center text-[28px] text-white font-jalnan">
        {quizData[currentIdx].question.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center flex-col h-[60%] mt-auto gap-4">
        <Button onClick={handleNextQuestion}>
          {quizData[currentIdx].answer1.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Button>
        {currentIdx !== 8 && (
          <Button onClick={handleNextQuestion}>
            {quizData[currentIdx].answer2.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Button>
        )}
      </div>
    </Container>
  );
}

export default Main;
