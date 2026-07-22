import React, { useEffect, useState } from "react";
import styles from "./result.module.scss";
import { DessertIdea } from "@/types/dessert";

export default function ResultPage() {
  const [idea, setIdea] = useState<DessertIdea | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("currentIdea");

    if (data) {
      setIdea(JSON.parse(data));
    }
  }, []);

  return <div></div>;
}
