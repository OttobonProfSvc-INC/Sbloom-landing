import type { MetaFunction } from "react-router";
import { SolutionsOverviewPage } from "../pages/solutions/SolutionsOverviewPage";

export const meta: MetaFunction = () => {
  return [
    { title: "CREATE — Help People Understand Your Value | sBLOOM Solutions" },
    { name: "description", content: "Social media management, photo, and video content solutions." },
    { property: "og:title", content: "CREATE — Help People Understand Your Value | sBLOOM Solutions" },
    { property: "og:description", content: "Social media management, photo, and video content solutions." },
  ];
};

export default function Route() {
  return <SolutionsOverviewPage initialSection="create" />;
}
