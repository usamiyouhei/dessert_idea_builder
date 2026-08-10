import {
  BerriesIcon,
  CandyIcon,
  ChocolateDecorationIcon,
  ChocolatePartsIcon,
  EdibleFlowersIcon,
  FruitsIcon,
  GoldLeafIcon,
  MintIcon,
  NappageIcon,
  NutsIcon,
  PipedCreamIcon,
  SugarArtIcon,
  TuileIcon,
} from "@/components/icons/decorations";
import type { DessertOption } from "@/types/dessert";

export const decorations: DessertOption[] = [
  { value: "chocolate parts", label: "チョコパーツ", icon: ChocolatePartsIcon },
  { value: "tuile", label: "チュイル", icon: TuileIcon },
  { value: "candy", label: "アメ", icon: CandyIcon },
  { value: "candy crafting", label: "飴細工", icon: SugarArtIcon },
  { value: "cream squeeze", label: "クリーム絞り", icon: PipedCreamIcon },
  { value: "fruits", label: "フルーツ", icon: FruitsIcon },
  { value: "napage", label: "ナパージュ", icon: NappageIcon },
  { value: "berries", label: "ベリー", icon: BerriesIcon },
  { value: "mint", label: "ミント", icon: MintIcon },
  { value: "gold-leaf", label: "金箔", icon: GoldLeafIcon },
  { value: "nuts", label: "ナッツ", icon: NutsIcon },
  {
    value: "edible-flowers",
    label: "エディブルフラワー",
    icon: EdibleFlowersIcon,
  },
  {
    value: "chocolate-decoration",
    label: "チョコレート飾り",
    icon: ChocolateDecorationIcon,
  },
];
