"use client";

import Image from "next/image";
import Link from "next/link";

const newsArticles = [
  {
    title: "Dearo Investment Pvt Ltd sweeps multiple awards at Iconic Awards 2024",
   
    image: "/images/news/newsg.jpg",
    link: "/news",
  },
  {
    title: "Partnership with Global Tech Startup",
   
    image: "/images/news/award3.jpeg",
    link: "/news",
  },
  {
    title: "Dearo Investment shines at People’s Excellency Awards",
   
    image: "/images/news/news1.jpg",
    link: "/news",
  },
];

export default function HomeNewsSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {newsArticles.map((news, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={400}
                  height={250}
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{news.title}</h5>
                

                  {/* NAVIGATION BUTTON */}
                  <Link
                    href={news.link}
                    className="btn btn-outline-primary mt-3 align-self-start"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
