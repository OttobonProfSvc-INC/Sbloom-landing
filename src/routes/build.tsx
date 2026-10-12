import type { MetaFunction } from "react-router";
import { BuildPage } from "../pages/solutions/BuildPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Build Your Digital Foundation | sBLOOM" },
    { name: "description", content: "Website design, SEO, and discoverability solutions." },
    { property: "og:title", content: "Build Your Digital Foundation | sBLOOM" },
    { property: "og:description", content: "Website design, SEO, and discoverability solutions." },
  ];
};

export default function Route() {
  return <BuildPage />;
}
