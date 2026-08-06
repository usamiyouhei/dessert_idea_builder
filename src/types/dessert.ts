import { LucideIcon } from "lucide-react";

export type DessertOption = {
  value: string;
  label: string;
  icon?: LucideIcon;
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
