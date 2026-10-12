import type { MetaFunction } from "react-router";
import { ConsultingProfessionalServicesPage } from "../pages/industries/ProfessionalServicesPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Consulting & IT Digital Growth | sBLOOM" },
    { name: "description", content: "Digital presence for consulting and professional services." },
    { property: "og:title", content: "Consulting & IT Digital Growth | sBLOOM" },
    { property: "og:description", content: "Digital presence for consulting and professional services." },
  ];
};

export default function Route() {
  return <ConsultingProfessionalServicesPage />;
}
