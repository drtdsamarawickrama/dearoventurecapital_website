"use client";

import Image from "next/image";

export default function InvestorPage() {
  return (
    <main className="bg-light text-dark">

      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Financial Reports & Investor Opportunities</h1>
          <p className="lead">Transparency and growth you can trust with Dearo Investment Limited</p>
        </div>
      </section>

      {/* Financial Reports Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Financial Reports</h2>
          <p className="text-center mb-5">
            At Dearo Investment Limited, we believe in complete financial transparency. Our financial reports provide a clear view of our performance, risk management practices, and growth strategy—ensuring investors and stakeholders have the insights they need to make informed decisions.
          </p>

          <div className="row g-4">
            {/* Annual & Quarterly Reports */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Annual & Quarterly Statements</h5>
                  <p className="card-text">
                    Balance sheets, income statements, and cash flow statements prepared under international accounting standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Highlights */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Performance Highlights</h5>
                  <p className="card-text">
                    Key metrics, growth trends, and financial ratios reflecting operational efficiency and profitability.
                  </p>
                </div>
              </div>
            </div>

            {/* Risk & Compliance */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Risk & Compliance Overview</h5>
                  <p className="card-text">
                    Credit, market, and operational risk insights with mitigation strategies and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Investment & Portfolio Reports */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Investment & Portfolio Reports</h5>
                  <p className="card-text">
                    Analysis of lending portfolios, sector exposure, and ESG impact outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-5"/>

      {/* Investor Invitation Section */}
      <section className="py-5 bg-secondary text-white">
        <div className="container">
          <h2 className="text-center mb-4">Investor Invitation</h2>
          <p className="text-center mb-5">
            Partner With a High-Growth, Impact-Driven Financial Institution. Dearo Investment Limited welcomes foreign investors, institutional partners, and strategic stakeholders to participate in a fast-growing non-bank financial services institution in Sri Lanka and beyond.
          </p>

          <div className="row g-4">
            {/* Attractive Returns */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-white text-dark shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Attractive & Predictable Returns</h5>
                  <p className="card-text">
                    Structured investment models delivering competitive and consistent returns, supported by transparent reporting aligned with international standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Management */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-white text-dark shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Robust Risk Management</h5>
                  <p className="card-text">
                    Advanced credit assessment, collateral-backed lending, and portfolio insurance strategies safeguard capital and minimize exposure.
                    </p>
                </div>
              </div>
            </div>

            {/* Scalable Growth */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-white text-dark shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Scalable Growth Strategy</h5>
                  <p className="card-text">
                    Expansion into 25+ branches and international markets including Kenya and the Philippines, powered by digital transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact-Driven Investing */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-white text-dark shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Impact-Driven Investing</h5>
                  <p className="card-text">
                    Focus on SMEs, agriculture, and underserved communities, delivering measurable financial, social, and ESG impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h3 className="mb-4">Ready to Partner With Dearo?</h3>
          <p className="mb-4">
            Join us in driving sustainable growth and delivering impactful returns.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">Contact Us</a>
        </div>
      </section>

    </main>
  );
}
