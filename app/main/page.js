// 파일 최상단에 추가
"use client";

import Container from "@/components/Container";
import React, { useState } from "react";

import quizData from '../data/quiz.json';


function Button({ children, onClick }) {
  return (
    <button type="button" className="" onClick={onClick}>
      {children}
    </button>
  );
}

function Main() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handelNextQuestion = () => {
    if (currentIdx < quizData.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  return (
    <Container>
      <div className="flex flex-1 items-center break-keep text-center">
        {quizData[currentIdx].question}
      </div>
      <div className="flex flex-col mt-auto gap-2">
        <Button onClick={handelNextQuestion}>
          {quizData[currentIdx].answer1}
        </Button>
        <Button onClick={handelNextQuestion}>
          {quizData[currentIdx].answer2}
        </Button>
      </div>
    </Container>
  );
}

export default Main;
