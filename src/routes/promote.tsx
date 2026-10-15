import type { MetaFunction } from "react-router";
import { SolutionsOverviewPage } from "../pages/solutions/SolutionsOverviewPage";

export const meta: MetaFunction = () => {
  return [
    { title: "PROMOTE — Reach The Right Audience | sBLOOM Solutions" },
    { name: "description", content: "Targeted advertising and marketing campaigns." },
    { property: "og:title", content: "PROMOTE — Reach The Right Audience | sBLOOM Solutions" },
    { property: "og:description", content: "Targeted advertising and marketing campaigns." },
  ];
};

export default function Route() {
  return <SolutionsOverviewPage initialSection="promote" />;
}
