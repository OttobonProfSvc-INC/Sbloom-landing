import type { MetaFunction } from "react-router";
import { SolutionsOverviewPage } from "../pages/solutions/SolutionsOverviewPage";

export const meta: MetaFunction = () => {
  return [
    { title: "BUILD — Help People Find Your Business | sBLOOM Solutions" },
    { name: "description", content: "Website design, Google Business Profile, and SEO solutions." },
    { property: "og:title", content: "BUILD — Help People Find Your Business | sBLOOM Solutions" },
    { property: "og:description", content: "Website design, Google Business Profile, and SEO solutions." },
  ];
};

export default function Route() {
  return <SolutionsOverviewPage initialSection="build" />;
}
