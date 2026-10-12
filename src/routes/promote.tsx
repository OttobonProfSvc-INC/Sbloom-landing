import type { MetaFunction } from "react-router";
import { PromotePage } from "../pages/solutions/PromotePage";

export const meta: MetaFunction = () => {
  return [
    { title: "Promote to the Right Audience | sBLOOM" },
    { name: "description", content: "Campaigns, ads, and performance marketing." },
    { property: "og:title", content: "Promote to the Right Audience | sBLOOM" },
    { property: "og:description", content: "Campaigns, ads, and performance marketing." },
  ];
};

export default function Route() {
  return <PromotePage />;
}
