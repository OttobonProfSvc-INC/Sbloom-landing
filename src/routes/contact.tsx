import type { MetaFunction } from "react-router";
import { ContactPage } from "../pages/ContactPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact sBLOOM | Let's Talk" },
    { name: "description", content: "Get in touch to discuss your digital growth goals." },
    { property: "og:title", content: "Contact sBLOOM | Let's Talk" },
    { property: "og:description", content: "Get in touch to discuss your digital growth goals." },
  ];
};

export default function Route() {
  return <ContactPage />;
}
