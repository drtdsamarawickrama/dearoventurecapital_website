"use client";

import Image from "next/image";

const directors = [
  {
    name: "Mr. Prasanna Sanjeewa Ranasinghe",
    role: "Executive Director / Chief Executive Officer",
    image: "/images/directors/prasanna 1.png",
  },
  {
    name: "Mr. Roshan Jansen",
    role: "Executive Director / Deputy Chief Executive Officer",
    image: "/images/directors/roshan.png",
  },
  {
    name: "Mr. Upul Edirisooriya",
    role: "Non Independent Non Executive Director",
    image: "/images/directors/upul.png",
  },
  {
    name: "Mr. Seiichirou Ukegawa",
    role: "Non Independent Non Executive Director",
    image: "/images/directors/Seiichirou-Ukegawa.webp",
  },
  {
    name: "Mr. Iwatsuka Sangyo",
    role: "Non Independent Non Executive Director",
    image: "/images/directors/Iwatsuka-Sangyo.jpeg",
  },
];

const corporateManagement = [
  {
    name: "Mr. Terence Yatawara",
    role: "Head of Sales & Marketing",
    image: "/images/directors/terence.png",
  },
  {
    name: "Mr. Rajitha Madushanka",
    role: "Head of Administration",
    image: "/images/directors/rajitha.jpg",
  },
  {
    name: "Mr. Asitha Suranjith",
    role: "Head of Investment",
    image: "/images/management/asith1.jpg",
  },
  {
    name: "Mr. Chathura Dissanayaka",
    role: "Head of Channel Development",
    image: "/images/management/chathura.jpg",
  },
  {
    name: "Mr. Rex",
    role: "Head of Branch Operation",
    image: "/images/directors/rex1.jpg",
  },
];

export default function DirectorsPage() {
  return (
    <main className="directors-page">
      <section className="container py-5">

        {/* Board of Directors */}
        <div className="text-center mb-5">
          <h1 className="page-title">Board of Directors</h1>
          <p className="page-subtitle">
            Strategic leadership guiding Dearo Venture Capital Limited
          </p>
        </div>

        <div className="row justify-content-center g-4 mb-5">
          {directors.map((director, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 border-0 shadow-sm text-center director-card p-4">
                <div
                  className="mx-auto mb-3 position-relative photo-wrapper"
                >
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </div>
                <h6 className="fw-semibold mb-1">{director.name}</h6>
                <small className="text-muted">{director.role}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider my-5">
          <span className="divider-line" />
        </div>

        {/* Corporate Management */}
        <div className="text-center mb-5">
          <h2 className="page-title">Corporate Management</h2>
          <p className="page-subtitle">
            Driving operational excellence across Dearo Venture Capital Limited
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {corporateManagement.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 border-0 shadow-sm text-center director-card p-4">
                <div
                  className="mx-auto mb-3 position-relative photo-wrapper"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </div>
                <h6 className="fw-semibold mb-1">{member.name}</h6>
                <small className="role-badge">{member.role}</small>
              </div>
            </div>
          ))}
        </div>

      </section>

      <style jsx>{`
        .directors-page {
          background: #f8f9fa;
          min-height: 100vh;
        }

       



        .page-title {
          font-size: 2rem;
          font-weight: 700;
          color: #0b1f4b !important;
        }

        .page-subtitle {
          font-size: 1rem;
          color: #6c757d;
          margin-top: 6px;
        }

        .photo-wrapper {
          width: 180px;
          height: 180px;
        }

        .director-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          background: #fff;
          cursor: pointer;
        }

        .director-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.14);
        }

        h6 {
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          margin-top: 8px;
        }

        small {
          font-size: 0.85rem;
          color: #6c757d;
        }

        .role-badge {
          font-size: 0.85rem;
          color: #1a3a6b;
          font-weight: 500;
        }

        .section-divider {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .divider-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, transparent, #1a3a6b55, transparent);
          display: block;
        }

        @media (max-width: 991px) {
          .director-card {
            margin-bottom: 20px;
          }
          .photo-wrapper {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 576px) {
          .photo-wrapper {
            width: 130px;
            height: 130px;
          }
        }
      `}</style>
    </main>
  );
}
