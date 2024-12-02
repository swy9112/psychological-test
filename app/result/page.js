// 파일 최상단에 추가
"use client";

import React, { useEffect } from "react";

function Result() {
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
        <div className="flex items-center bg-result-bg px-[25px]" style={{ height: `calc(var(--vh, 1vh) * 100)` }}>
            <div className="bg-result-box-bg w-full rounded-[16px] text-center pt-12 pb-[58px]">
                <p className="text-[20px] leading-[42px] text-[#665871] font-medium">나의 커플 여행 DNA는?</p>
                <h1 className="font-jalnan mt-[7px] text-[#FF4162] text-[42px] leading-[42px]">WWMM</h1>
                <div className="bg-text-bg w-[113px] h-[19px] bg-contain mx-auto mt-1"></div>
                <div className="mt-4">
                    <p className="text-[24px] leading-[36px] text-[#43393B] font-medium">현정아</p>
                    <p className="text-[24px] leading-[36px] text-[#43393B] font-medium">나랑 결혼해 줄래?</p>
                </div>
                <div className="bg-ring-img w-[132px] h-[132px] bg-contain mx-auto mt-10"></div>
            </div>
        </div>
    )
}

export default Result;