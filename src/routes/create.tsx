import type { MetaFunction } from "react-router";
import { CreatePage } from "../pages/solutions/CreatePage";

export const meta: MetaFunction = () => {
  return [
    { title: "Create Content & Assets | sBLOOM" },
    { name: "description", content: "Social media, video production, and content creation." },
    { property: "og:title", content: "Create Content & Assets | sBLOOM" },
    { property: "og:description", content: "Social media, video production, and content creation." },
  ];
};

export default function Route() {
  return <CreatePage />;
}
