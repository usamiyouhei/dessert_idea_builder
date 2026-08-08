import {
  ConeIcon,
  HexagonIcon,
  LayeredIcon,
  LeafIcon,
  OvalIcon,
  PyramidIcon,
  RoundIcon,
  SphereIcon,
  SquareIcon,
  TeardropIcon,
} from "@/components/icons/shapes";
import { DessertOption } from "@/types/dessert";

export const shapes: DessertOption[] = [
  {
    value: "round",
    label: "丸型",
    icon: RoundIcon,
  },
  {
    value: "square",
    label: "四角",
    icon: SquareIcon,
  },
  {
    value: "layered",
    label: "層になった",
    icon: LayeredIcon,
  },
  {
    value: "sphere",
    label: "球体",
    icon: SphereIcon,
  },
  {
    value: "cone",
    label: "円錐",
    icon: ConeIcon,
  },
  {
    value: "oval",
    label: "オーバル型",
    icon: OvalIcon,
  },
  {
    value: "pyramid",
    label: "ピラミッド",
    icon: PyramidIcon,
  },
  {
    value: "leaf",
    label: "リーフ型",
    icon: LeafIcon,
  },
  {
    value: "hexagon",
    label: "六角形",
    icon: HexagonIcon,
  },
  {
    value: "teardrop",
    label: "涙型",
    icon: TeardropIcon,
  },
];
