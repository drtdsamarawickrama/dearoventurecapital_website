
import type { Metadata } from "next";
import Link from "next/link";
import SriLankaMapWrapper from "@/components/PropertyLifestyle/SriLankaMapWrapper";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Property & Lifestyle Development | Dearo Venture Capital",
  description:
    "Explore Dearo Property & Lifestyle Development, including boutique tourism villa concepts and proposed dream home-building solutions across Sri Lanka.",
};

const villaFeatures = [
  { icon: "🛏️", title: "Three Bedrooms", desc: "Comfortable private bedroom spaces." },
  { icon: "🛋️", title: "Living & Dining", desc: "Spacious areas for relaxation and dining." },
  { icon: "🍽️", title: "Kitchen Facilities", desc: "Convenient facilities for everyday living." },
  { icon: "🏊", title: "Private Swimming Pool", desc: "A private space to relax and enjoy." },
  { icon: "🌿", title: "Landscaped Garden", desc: "Beautiful outdoor surroundings." },
  { icon: "☀️", title: "Outdoor Veranda", desc: "An inviting outdoor living space." },
  { icon: "🚗", title: "Private Parking", desc: "Convenient vehicle parking." },
  { icon: "🏡", title: "Modern Interiors", desc: "Comfortable contemporary interiors." },
];

const homeFeatures = [
  { icon: "🛏️", title: "Three Bedrooms" },
  { icon: "🛋️", title: "Living Area" },
  { icon: "🍽️", title: "Kitchen" },
  { icon: "🚿", title: "Bathroom" },
  { icon: "🚗", title: "Vehicle Parking" },
  { icon: "🌳", title: "Landscaped Garden" },
];

const process = [
  {
    number: "01",
    title: "Initial Customer Consultation",
    desc: "Understanding customer goals, requirements and homeownership expectations.",
  },
  {
    number: "02",
    title: "Land & Project Assessment",
    desc: "Assessing land availability and the customer's project requirements.",
  },
  {
    number: "03",
    title: "House Design & Cost Estimation",
    desc: "Preparing preliminary house designs and estimated project costs.",
  },
  {
    number: "04",
    title: "Financing Assessment & Agreement",
    desc: "Exploring suitable financing arrangements and finalising agreements.",
  },
  {
    number: "05",
    title: "Construction Planning",
    desc: "Coordinating construction planning and project requirements.",
  },
  {
    number: "06",
    title: "Progress Monitoring & Handover",
    desc: "Monitoring construction progress and coordinating the final handover.",
  },
];

const destinations = [
  {
    region: "NORTH & EAST",
    areas: [
      {
        name: "TRINCOMALEE",
        places: "Nilaveli, Uppuveli, Alles Garden, Sampalthivu",
      },
      {
        name: "BATTICALOA",
        places: "Pasikuda, Kalkudah",
      },
    //   {
    //     name: "AMPARA",
    //     places: "Arugam Bay, Pottuvil, Whiskey Point",
    //   },
    ],
  },
];

const futureLocations = [
  "Jaffna",
  "Mannar",
  "Down South",
  "Kandy",
  "Ella",
  "Nuwara Eliya",
  "Dambulla",
  "Sigiriya",
  "Anuradhapura",
  "Puttalam",
  "Negombo",
];

export default function PropertyLifestylePage() {
  return (
    <main className={styles.page}>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>
            DEARO VENTURE CAPITAL LTD
          </span>

          <h1>
            Building Dreams.
            <br />
            <span>Creating Destinations.</span>
          </h1>

          <p>
            Innovative home-building solutions and boutique
            tourism villa developments across Sri Lanka.
          </p>

          <div className={styles.heroButtons}>
            <a href="#developments" className={styles.primaryBtn}>
              Explore Developments <span>→</span>
            </a>

            <a href="#contact" className={styles.outlineBtn}>
              Contact Us
            </a>
          </div>
        </div>

        <div className={styles.heroBottom}>
          PROPERTY & LIFESTYLE DEVELOPMENT
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.intro} id="developments">
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>WHO WE ARE</span>

            <h2>
              Creating Opportunities Through
              <span> Property Development</span>
            </h2>

            <p>
              At Dearo Venture Capital Ltd, we believe that a home
              is more than a building, and a holiday villa is more
              than a place to stay. Both represent opportunity,
              comfort, lifestyle and long-term value.
            </p>

            <p>
              Through our Property & Lifestyle Development
              initiatives, we aim to create opportunities for
              families to build their dream homes and for tourism
              partners and investors to participate in Sri Lanka's
              growing tourism accommodation sector.
            </p>
          </div>

          <div className={styles.conceptGrid}>
            <a href="#tourism" className={styles.conceptCard}>
              <div className={styles.conceptNumber}>01</div>
              <span className={styles.conceptIcon}>🏝️</span>
              <h3>Dearo Boutique Tourism Villas</h3>
              <p>
                Exploring attractive holiday accommodation
                development opportunities across Sri Lanka.
              </p>
              <span className={styles.learnMore}>Explore Villas →</span>
            </a>

            <a href="#dream-home" className={styles.conceptCard}>
              <div className={styles.conceptNumber}>02</div>
              <span className={styles.conceptIcon}>🏡</span>
              <h3>Dearo – Build Your Dream Home</h3>
              <p>
                A proposed structured home-building and financing
                approach designed around family needs.
              </p>
              <span className={styles.learnMore}>Explore Home Building →</span>
            </a>
          </div>
        </div>
      </section>

      {/* TOURISM VILLAS */}
      <section className={styles.tourism} id="tourism">
        <div className={styles.tourismHero}>
          <div className={styles.tourismOverlay}></div>

          <div className="container">
            <div className={styles.tourismTitle}>
              <span className={styles.sectionLabelLight}>
                01 / TOURISM DEVELOPMENT
              </span>

              <h2>Dearo Boutique Tourism Villas</h2>
              <h3>Experience Sri Lanka. Discover Your Own Paradise.</h3>

              <p>
                Creating attractive, comfortable and professionally
                managed holiday accommodation in Sri Lanka's most
                promising tourism destinations.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={styles.tourismDescription}>
            <div>
              <span className={styles.sectionLabel}>
                OUR VISION
              </span>

              <h3>
                Bringing Tropical Living
                <span> to Life</span>
              </h3>
            </div>

            <p>
              We are exploring opportunities across the country's
              beautiful coastal regions, with particular attention
              to the Northern and Eastern tourism corridors.
              Our proposed villa concept combines privacy, modern
              comfort and tropical surroundings.
            </p>
          </div>

          {/* VILLA FEATURES HEADING */}
          <div className={styles.featureHeading}>
            <span className={styles.sectionLabel}>VILLA CONCEPT</span>
            <h3>Designed for Comfort & Relaxation</h3>
          </div>

          {/* CENTERED VILLA IMAGE - CLICK TO ENLARGE */}
          <div
            className={styles.villaGallery}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: "35px auto 45px",
            }}
          >
            <a
              href="#villa-image-preview"
              aria-label="View villa image in full size"
              style={{
                display: "block",
                width: "100%",
                maxWidth: "850px",
                cursor: "zoom-in",
              }}
            >
              <img
                src="/images/villa1.jpeg"
                alt="Modern luxury villa exterior"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  maxHeight: "520px",
                  objectFit: "cover",
                  objectPosition: "center",
                  margin: "0 auto",
                  borderRadius: "14px",
                  boxShadow: "0 12px 35px rgba(7, 26, 58, 0.16)",
                }}
              />
            </a>
          </div>

          {/* FULL-SCREEN IMAGE PREVIEW - CSS ONLY */}
          <div id="villa-image-preview" className="villa-image-lightbox">
            <a
              href="#tourism"
              className="villa-image-lightbox-backdrop"
              aria-label="Close enlarged villa image"
            />

            <a
              href="#tourism"
              className="villa-image-lightbox-close"
              aria-label="Close image preview"
            >
              ×
            </a>

            <img
              src="/images/villa1.jpeg"
              alt="Modern luxury villa exterior enlarged"
              className="villa-image-lightbox-img"
            />
          </div>

          <style>{`
            .villa-image-lightbox {
              display: none;
              position: fixed;
              inset: 0;
              z-index: 99999;
              align-items: center;
              justify-content: center;
              padding: 35px;
            }

            .villa-image-lightbox:target {
              display: flex;
            }

            .villa-image-lightbox-backdrop {
              position: absolute;
              inset: 0;
              background: rgba(0, 0, 0, 0.92);
              cursor: zoom-out;
            }

            .villa-image-lightbox-img {
              position: relative;
              z-index: 1;
              display: block;
              max-width: 95vw;
              max-height: 88vh;
              width: auto;
              height: auto;
              object-fit: contain;
              border-radius: 8px;
              box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
            }

            .villa-image-lightbox-close {
              position: absolute;
              top: 18px;
              right: 28px;
              z-index: 2;
              color: #ffffff;
              background: #ed1c24;
              width: 44px;
              height: 44px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              text-decoration: none;
              font-size: 32px;
              line-height: 1;
              font-weight: 400;
              cursor: pointer;
            }

            @media (max-width: 600px) {
              .villa-image-lightbox {
                padding: 15px;
              }

              .villa-image-lightbox-close {
                top: 12px;
                right: 12px;
                width: 40px;
                height: 40px;
              }

              .villa-image-lightbox-img {
                max-width: 96vw;
                max-height: 82vh;
              }
            }
          `}</style>

          {/* VILLA FEATURE CARDS */}
          <div className={styles.featureGrid}>
            {villaFeatures.map((feature) => (
              <div className={styles.featureCard} key={feature.title}>
                <span>{feature.icon}</span>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET DESTINATIONS AND MAP */}
      <section className={styles.destinations} id="destinations">
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              OUR TARGET DESTINATIONS
            </span>

            <h2>
              Exploring Sri Lanka's
              <span> Beautiful Destinations</span>
            </h2>

            <p>
              Our proposed tourism development locations focus
              on attractive coastal regions and emerging tourism
              destinations across Sri Lanka.
            </p>
          </div>

          {/* NORTH & EAST - ONE FULL-WIDTH BOX */}
          <div className={styles.destinationGrid}>
            {destinations.map((item) => (
              <div
                className={styles.destinationCard}
                key={item.region}
                style={{
                  gridColumn: "1 / -1",
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                <span className={styles.locationIcon}>⌖</span>

                <h3>{item.region}</h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "20px",
                    marginTop: "20px",
                    textAlign: "left",
                  }}
                >
                  {item.areas.map((area) => (
                    <div key={area.name}>
                      <h4
                        style={{
                          color: "#16834B",
                          fontSize: "15px",
                          fontWeight: 700,
                          marginBottom: "8px",
                        }}
                      >
                        {area.name}
                      </h4>

                      <p style={{ margin: 0, lineHeight: 1.8 }}>
                        {area.places}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* MAP HEADING */}
          <div className={styles.mapHeading}>
            <div>
              <span className={styles.sectionLabel}>
                EXPLORE THE LOCATIONS
              </span>

              <h3>Our Development Destination Map</h3>

              <p>
                Explore the coastal locations included in
                Dearo's proposed tourism villa development concept.
              </p>
            </div>

            <span className={styles.mapTag}>
              <span></span> Sri Lanka
            </span>
          </div>

          <SriLankaMapWrapper />

          {/* FUTURE DEVELOPMENT OPPORTUNITIES */}
          <div className={styles.futureLocations}>
            <h3>Future Development Opportunities</h3>

            <p>
              Dearo is also exploring potential opportunities
              in other tourism and lifestyle destinations.
            </p>

            <div className={styles.futureTags}>
              {futureLocations.map((location) => (
                <span key={location}>{location}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT APPROACH */}
      <section className={styles.approach}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabelLight}>
              WORK WITH DEARO
            </span>

            <h2>Our Development Approach</h2>

            <p>
              Dearo aims to coordinate project planning,
              construction management, marketing, tourism
              operations and guest-service arrangements,
              subject to the selected project's structure
              and necessary approvals.
            </p>
          </div>

          <div className={styles.approachGrid}>
            {[
              ["01", "Project Planning"],
              ["02", "Construction Management"],
              ["03", "Marketing"],
              ["04", "Tourism Operations"],
              ["05", "Guest Services"],
            ].map(([number, title]) => (
              <div className={styles.approachCard} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DREAM HOME */}
      <section className={styles.dreamHome} id="dream-home">
        <div className={styles.homeHero}>
          <div className={styles.homeOverlay}></div>

          <div className="container">
            <div className={styles.homeTitle}>
              <span className={styles.sectionLabelLight}>
                02 / HOME DEVELOPMENT
              </span>

              <h2>Dearo – Build Your Dream Home</h2>
              <h3>Your Dream Home. Our Commitment to Your Journey.</h3>

              <p>
                A proposed home-building solution designed to
                help customers move towards homeownership through
                a structured development and financing approach.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={styles.homeIntro}>
            <div>
              <span className={styles.sectionLabel}>
                YOUR HOME, YOUR FUTURE
              </span>

              <h3>
                A Home Designed Around
                <span> Family Living</span>
              </h3>
            </div>

            <p>
              Owning a comfortable home is one of life's most
              important goals. Our proposed concept focuses on
              coordinating the home-building process and exploring
              suitable customer financing arrangements.
            </p>
          </div>

          <div className={styles.homeFeatures}>
            {homeFeatures.map((feature) => (
              <div className={styles.homeFeature} key={feature.title}>
                <span>{feature.icon}</span>
                <h4>{feature.title}</h4>
              </div>
            ))}
          </div>

          {/* FINANCING */}
          <div className={styles.financeSection}>
            <div className={styles.financeContent}>
              <span className={styles.sectionLabelLight}>
                INDICATIVE FINANCING CONCEPT
              </span>

              <h3>A Structured Approach to Home Building</h3>

              <p>
                An indicative concept under consideration
                explores the following contribution structure.
              </p>
            </div>

            <div className={styles.financeCards}>
              <div className={styles.financeCard}>
                <span>Dearo Financing Contribution</span>
                <strong>60%</strong>

                <div className={styles.progress}>
                  <span style={{ width: "60%" }}></span>
                </div>
              </div>

              <div className={styles.financeCard}>
                <span>Customer Contribution</span>
                <strong>40%</strong>

                <div className={styles.progress}>
                  <span style={{ width: "40%" }}></span>
                </div>
              </div>
            </div>

            <p className={styles.financeNote}>
              Note: This is an indicative concept under
              consideration, not a confirmed financing offer.
              Actual financing amounts, eligibility, repayment
              terms, security requirements, construction
              specifications and approval conditions will
              depend on the customer's assessment and the
              final agreement.
            </p>
          </div>

          {/* HOME BUILDING PROCESS */}
          <div className={styles.processSection}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>
                HOW IT WORKS
              </span>

              <h3>Our Home-Building Process</h3>

              <p>
                A structured approach to help customers
                progress towards their dream home.
              </p>
            </div>

            <div className={styles.processGrid}>
              {process.map((item) => (
                <div className={styles.processCard} key={item.number}>
                  <span>{item.number}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY DEARO */}
      <section className={styles.whyDearo}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>WHY CHOOSE DEARO?</span>

            <h2>
              Building Opportunities Through
              <span> Professional Development</span>
            </h2>
          </div>

          <div className={styles.whyGrid}>
            {[
              ["🏢", "Diversified Organisation", "A diversified Sri Lankan business-development organisation."],
              ["🌱", "Responsible Development", "A focus on responsible and sustainable development."],
              ["📋", "Professional Coordination", "Professional project planning and coordination."],
              ["🤝", "Strategic Partnerships", "Building valuable development partnerships."],
              ["👥", "Customer-Focused Service", "Understanding and responding to customer needs."],
              ["🌍", "Collaboration Opportunities", "Opportunities for local and international collaboration."],
            ].map(([icon, title, desc]) => (
              <div className={styles.whyCard} key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className={styles.partnership}>
        <div className="container">
          <div className={styles.partnershipContent}>
            <span className={styles.sectionLabelLight}>
              PARTNERSHIP OPPORTUNITIES
            </span>

            <h2>Let's Build the Future Together</h2>

            <p>
              Whether you are planning to build your family
              home, exploring a tourism property opportunity,
              or seeking a strategic development partner,
              Dearo welcomes your enquiry.
            </p>

            <div className={styles.partnerTypes}>
              {[
                "Local & International Investors",
                "Landowners & Property Partners",
                "Tourism Entrepreneurs",
                "Hospitality Operators",
                "Joint-Venture Partners",
              ].map((partner) => (
                <span key={partner}>✓ {partner}</span>
              ))}
            </div>

            <Link href="#contact" className={styles.primaryBtn}>
              Discuss a Partnership <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contact} id="contact">
        <div className="container">
          <div className={styles.contactBox}>
            <div>
              <span className={styles.sectionLabelLight}>
                GET IN TOUCH
              </span>

              <h2>Start a Conversation with Dearo</h2>

              <p>
                Contact Dearo Venture Capital Ltd to discuss
                property development, tourism villa opportunities
                and home-building enquiries.
              </p>
            </div>

            <div className={styles.contactDetails}>
              <a href="mailto:info@dearoventurecapital.com">
                ✉ info@dearoventurecapital.com
              </a>

              <a href="tel:+94114782400">
                ☎ 011 478 2400
              </a>

              <p>
                9th Floor, Ceylinco House,
                No. 69, Janadhipathi Mawatha,
                Colombo 01, Sri Lanka.
              </p>

              <a
                href="mailto:info@dearoventurecapital.com?subject=Property%20and%20Lifestyle%20Development%20Enquiry"
                className={styles.primaryBtn}
              >
                Send an Enquiry →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER TAGLINE */}
      <section className={styles.footerTagline}>
        <div className="container">
          <h3>DEARO VENTURE CAPITAL LTD</h3>

          <p>
            Building Opportunities. Creating Partnerships.
            Developing Sri Lanka.
          </p>
        </div>
      </section>

    </main>
  );
}
