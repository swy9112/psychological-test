// 파일 최상단에 추가
"use client";

import { useEffect } from "react";

function Container({ children, main, currentIdx }) {
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
      className={`flex justify-center items-center w-screen ${main ? "bg-main-bg" : currentIdx === 8 ? "bg-[#151515]" : "bg-[#F5F7FA]"}`}
      style={{ height: `calc(var(--vh, 1vh) * 100)` }}
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-screen-md h-full">
        {children}
      </div>
    </div>
  );
}

export default Container;
