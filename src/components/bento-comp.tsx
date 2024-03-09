import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
export function BentoGridDemo() {
  return (
    <>
    <h2 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20 mb-16">
        Projects
      </h2>
    <BentoGrid className="max-w-xl lg:max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "NITRUTSAV",
    description: "The Official cultural fest of NIT Rourkela",
    header:  (
      <div className="relative w-full h-24 bg-gray-200 dark:bg-gray-800 rounded">
        <div className="absolute inset-0">
          <img src="/image/nitrutsav2.png" alt="NITRUTSAV Logo" className="w-full h-full object-cover" />
        </div>
      </div>
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Udaan",
    description: "The Aetomodelling club of NIT Rourkela",
    header:  (
      <div className="relative w-full h-24 bg-gray-200 dark:bg-gray-800 rounded">
        <div className="absolute inset-0">
          <img src="/image/udaan2.png" alt="Udaan Logo" className="w-full h-full object-cover" />
        </div>
      </div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "HackOdisha 3.0 Website",
    description: "Flagship event of Webwiz NIT Rourkela",
    header:  (
      <div className="relative w-full h-24 bg-gray-200 dark:bg-gray-800 rounded">
        <div className="absolute inset-0">
          <img src="/image/HO3.png" alt="ho3 Logo" className="w-full h-full object-cover" />
        </div>
      </div>
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Institute Counselling Service ",
    description:
      "Counselling Department of NIT Rourkela",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Vriddhi",
    description: "The official sports fest of NIT ROURKELA",
    header:  (
      <div className="relative w-full h-24 bg-gray-200 dark:bg-gray-800 rounded">
        <div className="absolute inset-0">
          <img src="/image/Vriddhi.png" alt="vriddhi Logo" className="w-full h-full object-cover" />
        </div>
      </div>
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
 /* {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },*/
];
