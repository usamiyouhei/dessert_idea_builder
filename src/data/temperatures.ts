import {
  ColdIcon,
  FrozenIcon,
  HotIcon,
  RoomTemperatureIcon,
  WarmIcon,
} from "@/components/icons/temperatures";
import type { DessertOption } from "@/types/dessert";

export const temperatures: DessertOption[] = [
  {
    value: "cold",
    label: "冷たい",
    icon: ColdIcon,
  },
  {
    value: "warm",
    label: "温かい",
    icon: WarmIcon,
  },
  {
    value: "hot",
    label: "熱々",
    icon: HotIcon,
  },
  {
    value: "room-temperature",
    label: "常温",
    icon: RoomTemperatureIcon,
  },
  {
    value: "frozen",
    label: "冷凍",
    icon: FrozenIcon,
  },
];
