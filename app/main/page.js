// 파일 최상단에 추가
"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Container from "@/components/Container";
import quizData from "../data/quiz.json";

function Button({ children, onClick, currentIdx }) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center bg-white w-full ${currentIdx !== 8 ? "h-[150px]": "h-[58px]"} rounded-[20px] text-[20px] text-[#151515] font-bold leading-[28px] shadow-custom`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Main() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const router = useRouter();

  const handleNextQuestion = () => {
    if (currentIdx < quizData.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      router.push("/result");
    }
  };

  return (
    <Container currentIdx={currentIdx}>
      <div className="flex flex-col w-full px-[20px] pb-[5.4vh]">
        <h2 className={`text-center text-[28px] ${currentIdx !== 8 ? "text-[#151515]" : "text-white"} font-jalnan mb-[6.5vh]`}>
          {currentIdx !== 8 &&
            <span className={`block w-10 h-10 bg-quiz-${currentIdx + 1} bg-contain mx-auto mb-[15px]`}></span>
          }
          {quizData[currentIdx].question.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h2>
        <div className={`${currentIdx === 8 && "absolute bottom-9 left-0 w-full px-[20px]"} flex justify-center flex-col gap-4 px-[10px]`}>
          <Button onClick={handleNextQuestion} currentIdx={currentIdx}>
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
      </div>
    </Container>
  );
}

export default Main;
