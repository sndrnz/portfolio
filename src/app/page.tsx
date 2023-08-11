import profile from "@/assets/profile.png";
import TypeWriter, { TextItem } from "@/components/TypeWriter";
import Image from "next/image";

const items: TextItem[] = [
  {
    text: "typescript",
    className: "text-code-typescript",
  },
  {
    text: "swift",
    className: "text-code-swift",
  },
  {
    text: "react",
    className: "text-code-react",
  },
  {
    text: "graphql",
    className: "text-code-graphql",
  },
  {
    text: "rust",
    className: "text-code-rust",
  },
  {
    text: "nextjs",
    className: "text-code-next",
  },
  {
    text: "tailwind",
    className: "text-code-tailwind",
  },
  {
    text: "nodejs",
    className: "text-code-node",
  },
  {
    text: "javascript",
    className: "text-code-javascript",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl h-screen flex md:items-center justify-center">
      <div className="p-8 w-full max-w-lg">
        <Image
          src={profile}
          alt="profile"
          width={300}
          height={300}
          className="object-cover mx-auto aspect-square rounded-full"
        />
        <h1 className="text-6xl font-light my-4">sndrnz</h1>
        <div className="ring-1 rounded-sm ring-white/20 py-2 px-4 flex gap-x-2 items-center">
          <span className="block text-xl text-white/20 select-none">&gt;</span>
          <TypeWriter prefix="i work with" items={items} time={1500} />
        </div>
      </div>
    </main>
  );
}
