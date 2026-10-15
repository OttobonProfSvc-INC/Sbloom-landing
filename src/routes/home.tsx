import type { MetaFunction } from "react-router";
import { HomePage } from "../pages/HomePage";

export const meta: MetaFunction = () => {
  return [
    { title: "sBLOOM | AI Digital Growth Partner" },
    { name: "description", content: "S-Bloom is a specialized AI digital growth partner for expertise-led organizations." },
    { property: "og:title", content: "sBLOOM | AI Digital Growth Partner" },
    { property: "og:description", content: "S-Bloom is a specialized AI digital growth partner for expertise-led organizations." },
  ];
};

export default function Route() {
  return <HomePage />;
}
