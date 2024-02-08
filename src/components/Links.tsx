import { IconType } from "react-icons";
import { links } from "~/data/links";

export type Links = {
  url: string;
  icon: IconType;
}[];

export default function Links() {
  return (
    <div className="flex items-center gap-x-4 text-white">
      {links.map(({ url, icon: Icon }) => (
        <a target="_blank" key={url} href={url}>
          <Icon size={32} className="aspect-square hover:opacity-80" />
        </a>
      ))}
    </div>
  );
}
