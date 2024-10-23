// 파일 최상단에 추가
"use client";

import Container from "@/components/Container";
import React, { useState } from "react";

function Button({ children, onClick }) {
  return (
    <button type="button" className="" onClick={onClick}>
      {children}
    </button>
  );
}

function Main() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const quizData = [
    {
      question: "캠핑장에 도착했는데, 어디부터 시작하지?",
      answer1: "텐트부터 쳐야지! 안전이 우선!",
      answer2: "우선 산책부터! 자연이 날 부른다.",
    },
    {
      question:
        "캠핑장에 도착했는데, 옆 캠핑 사이트에서 음악이 너무 시끄럽다... 어떻게 할까?",
      answer1: "괜찮아, 자연 속에선 뭐든 즐겁게 받아들여야지!",
      answer2: "시끄러워! 조용히 해달라고 부탁하러 간다.",
    },
    {
      question: "캠핑 중에 갑자기 비가 쏟아진다면, 당신의 선택은?",
      answer1: "우산이 뭐야? 비 맞으며 자연을 만끽한다!",
      answer2: "안 돼! 우산을 찾아야 해! 젖으면 큰일이야!",
    },
    {
      question: "아침에 일어나서 커피를 내리려는데 커피가 없다니... 이럴 수가!",
      answer1: "아쉽지만 차라도 한 잔 마시며 힐링하자.",
      answer2: "커피 없으면 나 못 살아! 빨리 편의점으로 가야 해!",
    },
    {
      question: "밤이 되니 텐트 안에서 이상한 소리가 들려온다... 이건 뭐지?",
      answer1: "흥미진진! 자연 속의 새로운 친구일지도 몰라.",
      answer2: "무서워... 지금 바로 불을 더 피워야겠어!",
    },
    {
      question: "캠핑 중에 정전이 되었다... 이젠 어쩌지?",
      answer1: "괜찮아, 자연의 소리와 함께 낭만을 즐겨볼까?",
      answer2: "헉, 전기 없으면 아무것도 못 해! 당황스러움 100%!",
    },
    {
      question: "바베큐를 하려는데, 숯에 불이 잘 붙지 않는다. 이제 어떡하지?",
      answer1: "천천히 기다리면 불이 붙겠지. 시간은 많아!",
      answer2: "기다리기 힘들어! 당장 라이타를 동원해야 해!",
    },
    {
      question: "갑자기 옆 텐트에서 당신을 저녁에 초대했다... 어떻게 할까?",
      answer1: "당연히 가야지! 새로운 사람들과의 만남은 언제나 즐거워!",
      answer2: "음... 좀 부끄러운데, 그냥 혼자 있는 게 편해.",
    },
    {
      question: "텐트를 치다 보니 한쪽이 삐뚤빼뚤... 다시 해야 할까?",
      answer1: "뭐 어때! 캠핑의 묘미는 완벽하지 않은 데 있지.",
      answer2: "이건 좀... 다시 바로잡아야 마음이 편할 듯.",
    },
    {
      question: "캠핑의 마지막 날, 짐을 싸야 하는데 귀찮다... 어떻게 하지?",
      answer1: "천천히 정리하면서 추억을 음미하자.",
      answer2: "얼른 끝내고 편히 쉬고 싶어! 빨리 싸자!",
    },
  ];

  const handelNextQuestion = () => {
    if (currentIdx < quizData.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  return (
    <Container>
      <div className="flex flex-1 items-center">{quizData[currentIdx].question}</div>
      <div className="flex flex-col mt-auto gap-2">
        <Button onClick={handelNextQuestion}>{quizData[currentIdx].answer1}</Button>
        <Button onClick={handelNextQuestion}>{quizData[currentIdx].answer2}</Button>
      </div>
    </Container>
  );
}

export default Main;
