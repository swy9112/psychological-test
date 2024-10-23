import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <h1 className="flex items-center flex-1 text-xl">캠핑장에서 당신은 어떤 유형?</h1>
      <Link href="/main" className="w-full mt-auto px-2 py-4 bg-black text-white text-center">시작하기</Link>
    </Container>
  );
}
