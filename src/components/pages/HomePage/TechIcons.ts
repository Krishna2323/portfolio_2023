import { DiPhotoshop, DiReact } from "react-icons/di";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoSass,
} from "react-icons/io";
import {
  SiAmazonaws,
  SiCytoscapedotjs,
  SiFigma,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiCanva,
} from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import type { IconType } from "react-icons";

export const techIconsLeft: {
  color: string;
  icon: IconType;
  size?: string;
}[][] = [
  [
    {
      icon: IoLogoJavascript,
      color: "#F0DB4F",
    },
    {
      icon: SiTypescript,
      color: "#2875C3",
      size: "3rem",
    },
    { color: "#764ABC", icon: SiRedux },
  ],
  [
    { color: "#000000", icon: SiNextdotjs },
    {
      icon: SiTailwindcss,
      color: "#8B5CF6",
    },
  ],
  [
    {
      icon: IoLogoSass,
      color: "#CD6799",
    },
  ],
];

export const techIconsRight: {
  color: string;
  icon: IconType;
  size?: string;
}[][] = [
  [
    {
      icon: SiKubernetes,
      color: "#326ce5",
    },
  ],
  [
    {
      icon: SiAmazonaws,
      color: "#FF9A00",
    },
    {
      icon: GrDocker,
      color: "#0db7ed",
    },
  ],
  [
    {
      icon: IoLogoNodejs,
      color: "#68A063",
    },
    {
      icon: SiMongodb,
      color: "#589636",
    },
    {
      icon: SiPostgresql,
      color: "#50769D",
    },
  ],

  //   {
  //     icon: SiCanva,
  //     color: "#00C4CC",
  //   },
];
