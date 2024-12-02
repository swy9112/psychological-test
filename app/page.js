import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container main={true}>
      <h1 className="flex justify-center items-end font-jalnan text-white text-[46px] leading-[55px] text-center mb-10">
        커플 여행 <br />
        DNA 테스트!
      </h1>
      <div className="will-change-transform overflow-hidden w-full h-[275px] mb-14">
        <div className="flex animate-rolling w-[1590px] h-[275px]">
          <div className="flex-[0_0_auto] bg-rolling-img w-[795px] h-full bg-[length:auto_100%] bg-no-repeat"></div>
          <div className="flex-[0_0_auto] bg-rolling-img w-[795px] h-full bg-[length:auto_100%] bg-no-repeat"></div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full mt-auto px-5 pb-12">
        <Link
          href="/main"
          className="block w-full h-[60px] px-2 bg-[#28D6E0] text-[#001B3F] text-[18px] leading-[60px] text-center font-bold rounded-[50px]"
        >
          테스트 시작하기
        </Link>
      </div>
    </Container>
  );
}
