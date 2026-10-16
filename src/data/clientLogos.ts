export interface ClientLogo {
  id: string;
  name: string;
  image: string;
  sector?: string;
  tagline?: string;
}

/**
 * Master List of Client Logos
 * You can add new client logos here anytime by simply adding a new item to this array!
 */
export const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: "star-clinic",
    name: "Star Clinic",
    image: "/images/clients/star-clinic.jpg",
    sector: "Healthcare",
    tagline: "Family Medical Centre",
  },
  {
    id: "medcy-ivf",
    name: "Medcy IVF",
    image: "/images/clients/medcy-ivf.jpg",
    sector: "Fertility & IVF",
    tagline: "Miracles Made Here",
  },
  {
    id: "vizag-ivf",
    name: "Vizag IVF Centre",
    image: "/images/clients/vizag-ivf.jpg",
    sector: "Fertility Specialist",
    tagline: "Conceiving Joy",
  },
  {
    id: "medcy-hospitals",
    name: "Medcy Hospitals",
    image: "/images/clients/medcy-hospitals.jpg",
    sector: "Multi-Speciality",
    tagline: "Health, Hope & Harmony",
  },
  {
    id: "sri-venkateswara",
    name: "Sri Venkateswara Hospital",
    image: "/images/clients/sri-venkateswara.png",
    sector: "Hospital & Healthcare",
    tagline: "Premier Patient Care",
  },
  {
    id: "vizag-sainik",
    name: "Vizag Sainik Academy",
    image: "/images/clients/vizag-sainik.jpg",
    sector: "Defence Education",
    tagline: "Academy of Excellence",
  },
  {
    id: "sri-basara-school",
    name: "Sri Basara Leads International School",
    image: "/images/clients/sri-basara-school.jpg",
    sector: "International School",
    tagline: "Leading Global Education",
  },
  {
    id: "bansal-college",
    name: "Bansal Junior College",
    image: "/images/clients/bansal-college.png",
    sector: "Higher Education",
    tagline: "Ideal for Scholars",
  },
  {
    id: "sri-basara-defence",
    name: "Sri Basara Defence Academy",
    image: "/images/clients/sri-basara-defence.png",
    sector: "Defence Academy",
    tagline: "Learn • Lead • Succeed",
  },
];
