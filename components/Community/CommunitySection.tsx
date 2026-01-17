"use client";

export default function CommunityPage() {
  return (
    <main className="bg-white text-dark">
      {/* Hero Section */}
      <section
        className="hero d-flex align-items-center justify-content-center text-center"
        style={{ height: "20vh", backgroundColor: "#ffffff" }}
      >
        <h1 className="fw-bold mb-3 text-black">Community & Environment</h1>
      </section>

      {/* Video + Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            
            {/* YouTube Video */}
            <div className="col-lg-6">
              <div className="video-box">
                <iframe
                  src="https://www.youtube.com/embed/UxdckDrFK6I"
                  title="Dearo Agri Financing"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Text Content */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-2">
                Growing Agriculture, Empowering Farmers
              </h2>
              <p className="fs-5 text-muted mb-3">
                Dearo Investment Limited’s Agri Financing initiative demonstrates the company’s commitment to supporting farmers through tailored agricultural financing solutions.
              </p>
              <p className="fs-5 text-muted">
                The initiative highlights Dearo’s role in empowering the farming community by providing financial support that enhances agricultural productivity and promotes sustainable prosperity in rural areas of Sri Lanka.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .video-box {
          width: 100%;
          height: 320px;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
        }

        .video-box iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        h2 {
          color: #111;
        }

        @media (max-width: 992px) {
          .video-box {
            height: 220px;
          }
        }

        @media (max-width: 576px) {
          .video-box {
            height: 180px;
          }
        }
      `}</style>
    </main>
  );
}
