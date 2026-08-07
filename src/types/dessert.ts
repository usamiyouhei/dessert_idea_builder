import { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export type DessertIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export type DessertOption = {
  value: string;
  label: string;
  icon: DessertIcon;
};

export type DessertIdea = {
  id: string;
  dessertTypes: string[];
  flavors: string[];
  shapes: string[];
  textures: string[];
  temperatures: string[];
  decorations: string[];

  title: string;
  concept: string;
  aiPrompt: string;

  imageUrl: string;
  favorite: boolean;
  createdAt: string;
};
