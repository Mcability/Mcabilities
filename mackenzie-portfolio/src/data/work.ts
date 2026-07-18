export interface Project {
  number: string;
  client: string;
  title: string;
  category: string;
  challenge: string;
  approach: string;
  result: string;
  image: string;
}

export const projects: Project[] = [
  {
    number: "01",
    client: "ILRI",
    title: "Annual Report Redesign",
    category: "Research Institution / Publication Design",
    challenge: "Dense technical and financial data needed to reach non-specialist stakeholders.",
    approach: "Restructured the report's editorial layout, integrating infographics and data visualization to simplify complex findings.",
    result: "Contributed to a 30% increase in stakeholder downloads and engagement.",
    image: "/images/ilri.jpg",
  },
  {
    number: "02",
    client: "Uni Industries & Benham International",
    title: "Campaign Collateral",
    category: "FMCG / Consumer Goods",
    challenge: "Product lines needed stronger shelf and market visibility across a competitive catalog.",
    approach: "Developed catalogs, brochures and promotional materials with clear visual hierarchy and brand-consistent messaging.",
    result: "Campaign materials reached an audience of 20,000+ people.",
    image: "/images/benham.jpg",
  },
  {
    number: "03",
    client: "Moran Publishers",
    title: "Early-Grade Learning Workbook",
    category: "Educational Publishing",
    challenge: "Raw manuscript content needed to become an accessible, print-ready workbook for early learners.",
    approach: "Designed a full A4 InDesign layout, applying spacing, hierarchy and visual cues suited to early-grade readability.",
    result: "Delivered a production-ready workbook adopted in academic and training settings.",
    image: "/images/moran.jpg",
  },
];
