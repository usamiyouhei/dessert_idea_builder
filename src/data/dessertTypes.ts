import { DessertOption } from "@/types/dessert";
import {
  CakeSlice,
  CircleDot,
  GlassWater,
  IceCreamBowl,
  Layers3,
} from "lucide-react";

export const dessertTypes: DessertOption[] = [
  {
    value: "short cake",
    label: "ショートケーキ",
    icon: CakeSlice,
  },
  {
    value: "tart",
    label: "タルト",
    icon: CircleDot,
  },
  {
    value: "mousse",
    label: "ムース",
    icon: GlassWater,
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
