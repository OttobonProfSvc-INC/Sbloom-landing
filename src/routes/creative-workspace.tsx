import type { MetaFunction } from "react-router";
import { CreativeWorkspacePage } from "../pages/CreativeWorkspacePage";

export const meta: MetaFunction = () => {
  return [
    { title: "Creative Workspace | sBLOOM" },
    { name: "description", content: "Inside our creative process and workspace." },
    { property: "og:title", content: "Creative Workspace | sBLOOM" },
    { property: "og:description", content: "Inside our creative process and workspace." },
  ];
};

export default function Route() {
  return <CreativeWorkspacePage />;
}
