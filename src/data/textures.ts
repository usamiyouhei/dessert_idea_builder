import {
  ChewyIcon,
  CracklyIcon,
  CreamyIcon,
  CrispyIcon,
  CrunchyIcon,
  FluffyIcon,
  JigglyIcon,
  MoistIcon,
  StickyIcon,
} from "@/components/icons/textures";
import type { DessertOption } from "@/types/dessert";

export const textures: DessertOption[] = [
  { value: "crispy", label: "サクサク", icon: CrispyIcon },
  { value: "fluffy", label: "ふわふわ", icon: FluffyIcon },
  { value: "creamy", label: "なめらか", icon: CreamyIcon },
  { value: "chewy", label: "もちもち", icon: ChewyIcon },
  { value: "crunchy", label: "ザクザク", icon: CrunchyIcon },
  { value: "jiggly", label: "ぷるぷる", icon: JigglyIcon },
  { value: "sticky", label: "ねっとり", icon: StickyIcon },
  { value: "crackly", label: "カリカリ", icon: CracklyIcon },
  { value: "moist", label: "しっとり", icon: MoistIcon },
];
