import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "~/data/links";

export type Links = {
  url: string;
  icon: IconDefinition;
}[];

export default function Links() {
  return (
    <div className="flex gap-x-4 h-min text-white/30">
      {links.map(({ url, icon }) => (
        <a target="_blank" key={url} href={url}>
          <FontAwesomeIcon
            className="h-8 aspect-square hover:text-white/40"
            icon={icon}
          />
        </a>
      ))}
    </div>
  );
}
