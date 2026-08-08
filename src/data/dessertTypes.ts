import { MousseIcon, TartIcon } from "@/components/icons";
import { DessertOption } from "@/types/dessert";
import { CakeSlice, IceCreamBowl, Layers3 } from "lucide-react";

export const dessertTypes: DessertOption[] = [
  {
    value: "short cake",
    label: "ショートケーキ",
    icon: CakeSlice,
  },
  {
    value: "tart",
    label: "タルト",
    icon: TartIcon,
  },
  {
    value: "mousse",
    label: "ムース",
    icon: MousseIcon,
  },
  {
    value: "parfait",
    label: "パフェ",
    icon: IceCreamBowl,
  },
  {
    value: "mille-feuille",
    label: "ミルフィーユ",
    icon: Layers3,
  },
];
