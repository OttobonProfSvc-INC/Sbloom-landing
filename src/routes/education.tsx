import type { MetaFunction } from "react-router";
import { EducationPage } from "../pages/industries/EducationPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Education Industry Digital Growth | sBLOOM" },
    { name: "description", content: "Digital growth solutions for schools, colleges, and education brands." },
    { property: "og:title", content: "Education Industry Digital Growth | sBLOOM" },
    { property: "og:description", content: "Digital growth solutions for schools, colleges, and education brands." },
  ];
};

export default function Route() {
  return <EducationPage />;
}
