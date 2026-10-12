import type { MetaFunction } from "react-router";
import { AboutPage } from "../pages/AboutPage";

export const meta: MetaFunction = () => {
  return [
    { title: "About sBLOOM | Our Story" },
    { name: "description", content: "Learn about sBLOOM, our methodology, and our team." },
    { property: "og:title", content: "About sBLOOM | Our Story" },
    { property: "og:description", content: "Learn about sBLOOM, our methodology, and our team." },
  ];
};

export default function Route() {
  return <AboutPage />;
}
