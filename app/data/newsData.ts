export interface NewsArticle {
  slug: string;
  title: string;
  description: string;
  images: string[];
  videos?: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "dearo-venture-capital-new-board-of-directors",

    title:
      "Dearo Venture Capital Announces New Board of Directors",

    description:
      "Dearo Venture Capital Ltd has strengthened its leadership with the appointment of a new Board of Directors, marking a significant milestone in the company’s continued growth and strategic development. The announcement was made at a special media conference held on 10 September 2026 at the company’s Head Office at Ceylinco House, Colombo 01.",

    images: [
      "/images/news/news_m-1.jpg",
      "/images/news/news_m-2.jpg",
      "/images/news/news_m-3.jpg",
      "/images/news/news_m-4.jpg",
      "/images/news/news_m-5.jpg",
      "/images/news/news_m_6.jpg",
      "/images/news/news_m-7.jpg",
      "/images/news/news_m-8.jpg",
    ],

    videos: [],
  },

  {
    slug: "dearo-investment-iconic-awards-2024",

    title:
      "Dearo Investment Pvt Ltd sweeps multiple awards at Iconic Awards 2024",

    description:
      "Dearo Investment Pvt. Ltd. excelled at the Iconic Awards 2024, winning four notable awards including Best Investment Product Provider and Best Customer Service Excellence. The award ceremony took place at the BMICH in Colombo. The company specializes in comprehensive financial services and innovative digital solutions, with a focus on SME financing and business support. With over 30 branches, they aim to enhance their digital footprint. Under the leadership of CEO Prasanna Sanjeewa, Dearo has diversified into several sectors, fostering strong customer relationships and emphasizing growth and innovation.",

    images: [
      "/images/news/newsg.jpg",
    ],

    videos: [],
  },

  {
    slug: "dearo-supports-ampara-uhana-school",

    title:
      "Celebrating Children's Day: Dearo Investment Ltd Supports Ampara Uhana Junior School",

    description:
      "As part of its Corporate Social Responsibility initiatives, Dearo Investment Ltd proudly supported Children’s Day by providing lunch to the students of Ampara Uhana Primary School. This initiative reflects Dearo’s commitment to nurturing young minds, supporting local communities, and contributing to the well-being of future generations.",

    images: [
      "/images/news/school00.jpg",
      "/images/news/school1.jpg",
      "/images/news/school2.jpg",
      "/images/news/school4.jpg",
    ],

    videos: [],
  },

  {
    slug: "dearo-investment-peoples-excellency-awards",

    title:
      "Dearo Investment shines at People’s Excellency Awards",

    description:
      "Dearo Investment Pvt. Ltd. won four awards, including Excellence in Workplace Development and Best Customer Service Provider, at the People’s Excellency Awards 2024 in Colombo. Known for its financial services, such as SME financing and entrepreneur loans, the company operates over 25 branches nationwide. Under CEO Prasanna Sanjeewa, Dearo plans to expand its offerings, focusing on the MSME sector.",

    images: [
      "/images/news/news1.jpg",
    ],

    videos: [],
  },

  {
    slug: "dearo-supports-ampara-village-temple",

    title:
      "Dearo Supports Ampara Village Temple Annual Procession",

    description:
      "Dearo Investment Limited proudly supported the annual procession of the Ampara Village Temple, demonstrating its commitment to preserving local traditions and strengthening community bonds. Through this initiative, Dearo actively promotes cultural heritage and fosters meaningful engagement within the communities it serves.",

    images: [
      "/images/news/temple.jpg",
      "/images/news/temple1.jpg",
    ],

    videos: [],
  },
];