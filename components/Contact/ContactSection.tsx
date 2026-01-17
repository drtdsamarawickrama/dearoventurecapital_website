"use client";

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-light py-5 border-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fw-bold mb-4 text-black">Get in Touch with Our Team</h1>
              <p className="lead text-muted mb-0">
                Alternatively, should you wish to be contacted by our team,
                please complete the form below and we will respond promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            
            {/* Left Info Column */}
            <div className="col-lg-5">
              <div className="h-100 p-4 p-lg-5 rounded-4 shadow-sm bg-white text-black">
                <h3 className="fw-semibold mb-3">Contact Information</h3>
                <p className="mb-4 opacity-75">
                  Reach out to us for partnerships, investments, or general
                  inquiries. Our team will assist you promptly.
                </p>

                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Email:</strong>
                    <br />
                    info@dearoventurecapital.lk
                  </li>
                  <li className="mb-3">
                    <strong>Phone:</strong>
                    <br />
                    Hotline : 011 478 2400<br/>
                    
                   General Inquiries: +94 74 390 8274 <br />

                   Treasury Services: +94 74 987 6543<br />

                     Financing Services : +94 74 390 8274<br />
                  </li>
                  <li>
                    <strong>Office:</strong>
                    <br />
                8th Floor, Ceylinco House, No 69, Janadhipathi Mawatha, Colombo 01



                  </li>
                </ul>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="col-lg-7">
              <form
                className="h-100 shadow-sm p-4 p-lg-5 rounded-4 border"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Role / Position"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+94 7XXXXXXXX"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Write your message here..."
                      required
                    />
                  </div>

                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100 rounded-pill"
                    >
                      Submit Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(48, 112, 207, 0.2);
          border-color: #C6A54A;
        }

        .btn-primary {
          background: linear-gradient(90deg, #0d6efd, #6610f2);
          border: none;
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(240, 237, 237, 0.4);
        }
      `}</style>
    </main>
  );
}
