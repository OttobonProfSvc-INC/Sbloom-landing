import type { MetaFunction } from "react-router";
import { HowItWorksPage } from "../pages/HowItWorksPage";

export const meta: MetaFunction = () => {
  return [
    { title: "How It Works | sBLOOM Methodology" },
    { name: "description", content: "Our diagnose-first approach to digital growth." },
    { property: "og:title", content: "How It Works | sBLOOM Methodology" },
    { property: "og:description", content: "Our diagnose-first approach to digital growth." },
  ];
};

export default function Route() {
  return <HowItWorksPage />;
}
