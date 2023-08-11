import { technologies } from "@/data/technologies";
import TypeWriter from "../TypeWriter";

export default function Technologies() {
  return (
    <div className="ring-1 rounded-sm ring-white/20 py-2 px-4 flex gap-x-2 items-center">
      <span className="block text-xl text-white/20 select-none">&gt;</span>
      <TypeWriter prefix="i work with" items={technologies} time={1500} />
    </div>
  );
}
