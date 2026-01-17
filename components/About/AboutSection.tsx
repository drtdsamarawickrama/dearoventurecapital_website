"use client";
import Image from "next/image";

export default function AboutSection() {
  const milestones = [
    {
      year: "2022",
      title: "Establishment of Dearo Investment",
      description:
        "Dearo Investment Limited was formally established, laying the foundation for a disciplined and growth-oriented investment platform.",
    },
    {
      year: "2023",
      title: "Strategic Expansion & Branch Growth",
      description:
        "Launch of Dearo Agri and Dearo Engineering, expanding Dearo’s operations into agricultural finance and engineering-led project facilitation. During the same year, Dearo expanded its physical presence to 9 branches across Sri Lanka.",
    },
    {
      year: "2024",
      title: "Launch of Dearo Education",
      description:
        "Introduction of Dearo Education, extending Dearo’s impact beyond finance by supporting education initiatives and learning accessibility.",
    },
    {
      year: "2025",
      title: "Nationwide Expansion",
      description:
        "Expanded to 25 branches across Sri Lanka, reinforcing nationwide reach and operational strength.",
    },
  ];

 

  const awards = [
    {
      title: "Iconic Awards 2024",
      image: "/images/awards/AW.jpg",
    },
    {
      title: "Peoples Excellency Awards 2024",
      image: "/images/awards/Aw1.jpg",
    },
    {
      title: "Iconic Awards Bangkok 2025",
      image: "/images/awards/AW2.jpg",
    }, {
      title: "Asia Miracle Awards 2024",
      image: "/images/awards/AW3.jpg",
    }, {
      title: "BWIO USAAwards 2025",
      image: "/images/awards/AW4.jpg",
    }, {
      title: "Best SME Financing Initiative",
      image: "/images/awards/AW5.jpg",
    },
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">

        {/* ================= ABOUT OVERVIEW ================= */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3 text-black">About Our Company</h2>
            <p className="text-muted text-dark">
              Dearo Investment Limited was incorporated under the Companies Act
              No. 07 of 2007 and officially registered on 1st September 2022.
            </p>
            <p className="text-muted text-dark">
              With disciplined risk management, strong governance, and
              insurance-backed protection, Dearo empowers businesses and
              communities across Sri Lanka.
            </p>
          </div>

          <div className="col-md-6">
            <Image
              src="/images/about.png"
              alt="About Dearo"
              width={600}
              height={420}
              className="img-fluid rounded-4 shadow"
            />
          </div>
        </div>

        {/* ================= KEY MILESTONES ================= */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="fw-bold mb-3 text-black">Key Milestones</h3>
          </div>

          {milestones.map((item, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="milestone-card p-4 bg-white rounded-4 h-100">
                <h5 className="fw-bold text-black">{item.year}</h5>
                <h6 className="fw-semibold text-black">{item.title}</h6>
                <p className="text-muted mb-0 text-dark">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

       <div className="position-relative w-100 bg-light" style={{ height: "90vh" }}>
  <Image
    src="/images/directors/leader1.jpg"
    alt="About Dearo"
    fill
    priority
    style={{ objectFit: "contain" }}
  />
</div>
<br /> <br /> <br/>


      

 

        {/* ================= AWARDS ================= */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h3 className="fw-bold  text-black">Awards & Recognition</h3>
            <p className="text-muted text-center text-black">
              Recognition of excellence and leadership
            </p>
          </div>

          {awards.map((award, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="award-card text-center p-4 h-100">
                <div className="award-icon mx-auto mb-3">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="award-img"
                  />
                </div>
                <h6 className="fw-semibold text-black">{award.title}</h6>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .milestone-card {
          border-left: 4px solid #0d6efd;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
        }

        .director-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .director-card:hover {
          transform: translateY(-8px);
        }

        .director-img {
          position: relative;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
        }

        .director-img :global(img) {
          object-fit: cover;
        }

        .award-card {
          background: white;
          border-radius: 18px;
          border: 1px solid #e9ecef;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.35s ease;
        }

        .award-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .award-icon {
          position: relative;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0C0C0B, #f1f1f1);
          box-shadow: inset 0 0 0 2px #d4af37;
          overflow: hidden;
        }

        .award-img {
          object-fit: contain;
          padding: 14px;
        }
      `}</style>
    </section>
  );
}
