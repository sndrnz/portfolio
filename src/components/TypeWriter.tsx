"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export type TextItem = {
  text: string;
  className?: string;
};

type Props = {
  prefix?: string;
  time?: number;
  items: TextItem[];
};

export default function TypeWriter({ prefix, items, time = 1000 }: Props) {
  const [className, setClassName] = useState(items.at(0)?.className ?? "");

  const sequence = items
    .map((item) => {
      return [
        () => {
          console.log(item.className);
          setClassName(item.className ?? "");
        },
        item.text,
        time,
        "",
      ];
    })
    .flat();

  return (
    <>
      <div className="text-lg flex gap-x-[0.5em]">
        {prefix && <span>{prefix} </span>}
        <span className={className}>
          <TypeAnimation
            sequence={sequence}
            speed={10}
            deletionSpeed={50}
            repeat={Infinity}
            className="select-none"
          />
        </span>
      </div>
    </>
  );
}
