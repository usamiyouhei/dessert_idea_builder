import CaramelIcon from "@/components/icons/CaramelIcon";
import ChocolateIcon from "@/components/icons/ChocolateIcon";
import CitrusIcon from "@/components/icons/CitrusIcon";
import CoffeeIcon from "@/components/icons/CoffeeIcon";
import MatchaIcon from "@/components/icons/MatchaIcon";
import StrawberryIcon from "@/components/icons/StrawberryIcon";
import VanillaIcon from "@/components/icons/VanillaIcon";
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
