import type { MetaFunction } from "react-router";
import { HealthcarePage } from "../pages/industries/HealthcarePage";

export const meta: MetaFunction = () => {
  return [
    { title: "Healthcare Digital Growth | sBLOOM" },
    { name: "description", content: "Build trust and visibility for hospitals, clinics, and healthcare brands." },
    { property: "og:title", content: "Healthcare Digital Growth | sBLOOM" },
    { property: "og:description", content: "Build trust and visibility for hospitals, clinics, and healthcare brands." },
  ];
};

export default function Route() {
  return <HealthcarePage />;
}
