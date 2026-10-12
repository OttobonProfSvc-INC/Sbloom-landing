const fs = require('fs');
const path = require('path');

const routesDir = path.join(process.cwd(), 'src', 'routes');
if (!fs.existsSync(routesDir)) {
  fs.mkdirSync(routesDir, { recursive: true });
}

const routes = [
  { file: 'home.tsx', component: '../pages/HomePage', name: 'HomePage', title: 'sBLOOM | Digital Growth Partner', desc: 'S-Bloom is a specialized digital growth partner for expertise-led organizations.' },
  { file: 'education.tsx', component: '../pages/industries/EducationPage', name: 'EducationPage', title: 'Education Industry Digital Growth | sBLOOM', desc: 'Digital growth solutions for schools, colleges, and education brands.' },
  { file: 'healthcare.tsx', component: '../pages/industries/HealthcarePage', name: 'HealthcarePage', title: 'Healthcare Digital Growth | sBLOOM', desc: 'Build trust and visibility for hospitals, clinics, and healthcare brands.' },
  { file: 'professional-services.tsx', component: '../pages/industries/ProfessionalServicesPage', name: 'ConsultingProfessionalServicesPage', title: 'Consulting & IT Digital Growth | sBLOOM', desc: 'Digital presence for consulting and professional services.' },
  { file: 'solutions.tsx', component: '../pages/solutions/SolutionsOverviewPage', name: 'SolutionsOverviewPage', title: 'Our Solutions | sBLOOM', desc: 'Discover how we help organizations build, create, and promote.' },
  { file: 'build.tsx', component: '../pages/solutions/BuildPage', name: 'BuildPage', title: 'Build Your Digital Foundation | sBLOOM', desc: 'Website design, SEO, and discoverability solutions.' },
  { file: 'create.tsx', component: '../pages/solutions/CreatePage', name: 'CreatePage', title: 'Create Content & Assets | sBLOOM', desc: 'Social media, video production, and content creation.' },
  { file: 'promote.tsx', component: '../pages/solutions/PromotePage', name: 'PromotePage', title: 'Promote to the Right Audience | sBLOOM', desc: 'Campaigns, ads, and performance marketing.' },
  { file: 'about.tsx', component: '../pages/AboutPage', name: 'AboutPage', title: 'About sBLOOM | Our Story', desc: 'Learn about sBLOOM, our methodology, and our team.' },
  { file: 'how-it-works.tsx', component: '../pages/HowItWorksPage', name: 'HowItWorksPage', title: 'How It Works | sBLOOM Methodology', desc: 'Our diagnose-first approach to digital growth.' },
  { file: 'creative-workspace.tsx', component: '../pages/CreativeWorkspacePage', name: 'CreativeWorkspacePage', title: 'Creative Workspace | sBLOOM', desc: 'Inside our creative process and workspace.' },
  { file: 'contact.tsx', component: '../pages/ContactPage', name: 'ContactPage', title: "Contact sBLOOM | Let's Talk", desc: 'Get in touch to discuss your digital growth goals.' }
];

for (const route of routes) {
  const content = `import type { MetaFunction } from "react-router";
import { ${route.name} } from "${route.component}";

export const meta: MetaFunction = () => {
  return [
    { title: "${route.title}" },
    { name: "description", content: "${route.desc}" },
    { property: "og:title", content: "${route.title}" },
    { property: "og:description", content: "${route.desc}" },
  ];
};

export default function Route() {
  return <${route.name} />;
}
`;
  fs.writeFileSync(path.join(routesDir, route.file), content);
}
console.log('Routes generated successfully.');
