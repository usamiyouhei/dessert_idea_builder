import {
  StrawberryIcon,
  ChocolateIcon,
  MatchaIcon,
  CitrusIcon,
  VanillaIcon,
  CoffeeIcon,
  CaramelIcon,
} from "@/components/icons/flavors";
import { DessertOption } from "@/types/dessert";

export const flavors: DessertOption[] = [
  {
    value: "strawberry",
    label: "いちご",
    icon: StrawberryIcon,
  },
  {
    value: "chocolate",
    label: "チョコレート",
    icon: ChocolateIcon,
  },
  {
    value: "matcha",
    label: "抹茶",
    icon: MatchaIcon,
  },
  {
    value: "citrus",
    label: "柑橘",
    icon: CitrusIcon,
  },
  {
    value: "vanilla",
    label: "バニラ",
    icon: VanillaIcon,
  },
  {
    value: "coffee",
    label: "コーヒー",
    icon: CoffeeIcon,
  },
  {
    value: "caramel",
    label: "キャラメル",
    icon: CaramelIcon,
  },
];
