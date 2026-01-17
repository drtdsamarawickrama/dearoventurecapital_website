"use client";

import Image from "next/image";

const sliderImages = [
  "/images/community/slide1.jpg",
  "/images/community/slide2.jpg",
  "/images/community/slide3.jpg",
  "/images/community/slide4.jpg",
];

export default function CommunityPage() {
  return (
    <main className="bg-white text-dark">
      {/* Hero Section */}
      <section
        className="hero position-relative d-flex align-items-center justify-content-center text-center"
        style={{ height: "20vh", backgroundColor: "#ffffff" }}
      >
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center px-3">
          <h1 className="fw-bold mb-3 text-dark">Community & Environment</h1>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-5 bg-white">
        <div className="container text-center mb-5">
          <p className="lead text-dark fw-light mb-4">
            Driving sustainable initiatives for communities and the environment
          </p>
          <div
            id="communityCarousel"
            className="carousel slide shadow-sm rounded-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded-4 overflow-hidden">
              {sliderImages.map((img, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    width={1200}
                    height={500}
                    className="d-block w-100"
                    style={{ objectFit: "cover", height: "500px" }}
                  />
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#communityCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#communityCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Indicators */}
            <div className="carousel-indicators mt-3">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#communityCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="py-5 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center text-dark">
              <p className="fs-5 mb-4">
                At Dearo, corporate sustainability is a core principle embedded within our organisational culture and
                long-term vision. We view responsible business practices not as an obligation, but as a strategic
                commitment to creating lasting value for communities and the environment we serve.
              </p>
              <p className="fs-5 mb-4">
                Our approach is closely aligned with addressing social and economic disparities by integrating national
                development priorities into our business model. We actively identify key areas that require focused
                investment and intervention, followed by structured, hands-on support to ensure meaningful and
                inclusive socio-economic progress across a wider, islandwide demographic.
              </p>
              <p className="fs-5 mb-0">
                Dearo is committed to enabling broader participation in economic growth by empowering individuals,
                enterprises, and communities through sustainable initiatives. To maximise impact and accountability, our
                social and environmental contributions are primarily delivered through direct project implementation
                rather than indirect financial assistance, ensuring measurable outcomes and long-term benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .hero {
          position: relative;
        }

        .carousel-inner img {
          transition: transform 0.5s ease;
        }

        .carousel-item:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .hero {
            height: 25vh;
          }
          .overlay h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </main>
  );
}
