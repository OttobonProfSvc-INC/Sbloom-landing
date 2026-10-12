import type { MetaFunction } from "react-router";
import { SolutionsOverviewPage } from "../pages/solutions/SolutionsOverviewPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Our Solutions | sBLOOM" },
    { name: "description", content: "Discover how we help organizations build, create, and promote." },
    { property: "og:title", content: "Our Solutions | sBLOOM" },
    { property: "og:description", content: "Discover how we help organizations build, create, and promote." },
  ];
};

export default function Route() {
  return <SolutionsOverviewPage />;
}
