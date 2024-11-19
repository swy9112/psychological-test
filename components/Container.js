// 파일 최상단에 추가
"use client";

import { useEffect } from "react";

function Container({ children }) {

  useEffect(() => {
    // --vh 변수를 동적으로 설정
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // 화면 크기 변화시 --vh 값을 업데이트
    window.addEventListener("resize", setVh);
    setVh();

    // cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  return (
    <div
      className="flex justify-center w-screen bg-main-bg"
      style={{ height: `calc(var(--vh, 1vh) * 100)` }}
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-screen-md">
        {children}
      </div>
    </div>
  );
}

export default Container;
