export interface CareerRole {
  company: string;
  title: string;
  years: string;
  points: string[];
  stage: "Designer" | "Specialist" | "Manager" | "Creative Lead";
}

export const career: CareerRole[] = [
  {
    company: "English Press Ltd",
    title: "Creative Lead",
    years: "2026 – Present",
    stage: "Creative Lead",
    points: [
      "Directs end-to-end creative production for publications, marketing collateral and branding projects across print and digital channels.",
      "Owns editorial layout and publication design workflows from concept through print-ready delivery, coordinating with production teams to meet deadlines without compromising quality.",
    ],
  },
  {
    company: "Chrome Partners",
    title: "Creative Lead",
    years: "2022 – 2026",
    stage: "Creative Lead",
    points: [
      "Directed creative execution of annual reports, catalogs and branded campaigns across multiple concurrent client accounts, maintaining consistent brand standards across each.",
      "Delivered visual solutions for corporate and development-sector clients, strengthening measurable brand visibility through modern, audience-focused design systems.",
    ],
  },
  {
    company: "Brandworld Communications Ltd",
    title: "Creative Manager",
    years: "2018 – 2022",
    stage: "Manager",
    points: [
      "Managed a creative team and coordinated production timelines across multiple concurrent client projects, producing assets across print, digital and outdoor advertising.",
      "Designed awareness and promotional materials that supported measurable gains in audience engagement campaigns.",
    ],
  },
  {
    company: "Modern Fitness Gym",
    title: "Creative Designer",
    years: "2014 – 2016",
    stage: "Specialist",
    points: [
      "Directed branding and marketing communication initiatives — posters, banners, membership promotional materials — improving brand visibility through consistent visual identity.",
    ],
  },
  {
    company: "WordAlive Publishers",
    title: "Graphic Designer",
    years: "2008 – 2011",
    stage: "Designer",
    points: [
      "Designed book covers, internal layouts and marketing collateral for educational and inspirational publications.",
      "Prepared print-ready files ensuring production efficiency.",
    ],
  },
  {
    company: "King's Script Publishers",
    title: "Graphic Designer",
    years: "2004 – 2008",
    stage: "Designer",
    points: [
      "Designed editorial layouts and branded communication assets.",
      "Built foundational expertise in typography and print production workflows.",
    ],
  },
];

export const concurrent = [
  {
    title: "Graphic Designer & Publication Specialist",
    org: "Freelance / Contract-Based, Kenya",
    years: "2004 – Present",
    points: [
      "Designed annual reports and institutional publications for ILRI, Tausi Insurance, and Kenya Mortgage Refinance Company.",
      "Produced product catalogs and promotional assets for Uni Industries and Benham International.",
      "Authored and designed an instructional guide on professional calendar design using Adobe InDesign.",
    ],
  },
  {
    title: "Creative Consultant",
    org: "Moran (E.A) Publishers · P&D Destiny Light Publishers",
    years: "2011 – Present",
    points: [
      "Designs educational books, learning materials and motivational publications.",
      "Advises on branding consistency across publication lines.",
    ],
  },
];
