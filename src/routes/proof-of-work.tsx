import type { MetaFunction } from "react-router";
import { ProofOfWorkPage } from "../pages/ProofOfWorkPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Proof of Work | sBLOOM - Real Client Results" },
    { 
      name: "description", 
      content: "Explore verified before-and-after dashboards for Healthcare, Education, and Professional Services powered by sBLOOM AI-native digital marketing." 
    },
    { property: "og:title", content: "Proof of Work | sBLOOM - Real Client Results" },
    { 
      property: "og:description", 
      content: "Explore verified before-and-after dashboards for Healthcare, Education, and Professional Services." 
    },
  ];
};

export default function Route() {
  return <ProofOfWorkPage />;
}
