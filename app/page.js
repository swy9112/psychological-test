import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Link href="/main" className="w-full mt-auto px-2 py-4 bg-black text-white text-center">시작하기</Link>
    </Container>
  );
}
