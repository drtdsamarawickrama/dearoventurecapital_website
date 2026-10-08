"use client";

const investmentSteps = [
  {
    number: "01",
    title: "Investment Selection",
    text: "Explore suitable investment opportunities available through Dearo Islamic Venture Capital Ltd.",
  },
  {
    number: "02",
    title: "Partnership Agreement",
    text: "The investment structure, capital contribution, ownership participation, profit-sharing arrangement, and other applicable terms are agreed upon.",
  },
  {
    number: "03",
    title: "Capital Contribution",
    text: "The participating partners contribute their agreed capital to the Musharaka venture.",
  },
  {
    number: "04",
    title: "Business & Investment Growth",
    text: "The capital is deployed toward the agreed business or investment purpose in accordance with the applicable agreement.",
  },
  {
    number: "05",
    title: "Profit Sharing",
    text: "Where the venture generates distributable profits, profits are shared according to the agreed profit-sharing arrangement.",
  },
  {
    number: "06",
    title: "Partnership Outcome",
    text: "The investment concludes or continues according to the agreed terms, with the respective rights and obligations of each partner clearly defined.",
  },
];

export default function MusharakaInvestmentWorks() {
  return (
    <section className="steps-section">

      <div className="container">

        <div className="section-heading">

          {/* <div className="section-label">
            <span className="section-label-line" />
            THE INVESTMENT JOURNEY
          </div> */}

          <h2>
            How Musharaka <span>Investment Works</span>
          </h2>
{/* 
          <p>
            A clear partnership journey from investment selection to the
            agreed partnership outcome.
          </p> */}

        </div>


        <div className="steps-wrapper">

          {investmentSteps.map((step, index) => (

            <div
              className="step-row"
              key={index}
            >

              <div className="step-number">
                {step.number}
              </div>


              <div className="step-content">

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </div>


              {index !== investmentSteps.length - 1 && (
                <div className="step-connector" />
              )}

            </div>

          ))}

        </div>

      </div>


      <style jsx>{`

        .steps-section {
          padding: 110px 0;

          background: #ffffff;
        }


        .container {
          width: min(1180px, calc(100% - 48px));

          margin: 0 auto;
        }


        .section-heading {
          max-width: 700px;

          margin: 0 auto 65px;

          text-align: center;
        }


        .section-label {
          display: flex;

          justify-content: center;

          align-items: center;

          gap: 10px;

          margin-bottom: 17px;

          color: #16834b;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 2px;
        }


        .section-label-line {
          width: 35px;

          height: 2px;

          background: #ed1c24;
        }


        .section-heading h2 {
          margin: 0;

          color: #071a3a;

          font-size: clamp(36px, 5vw, 56px);

          line-height: 1.08;

          letter-spacing: -1.8px;

          font-weight: 800;
        }


        .section-heading h2 span {
          color: #16834b;
                    font-size: clamp(36px, 5vw, 56px);

        }


        .section-heading p {
          max-width: 690px;

          margin: 20px auto 0;

          color: #687386;

          font-size: 16px;

          line-height: 1.8;
        }


        .steps-wrapper {
          position: relative;

          max-width: 900px;

          margin: 0 auto;
        }


        .step-row {
          position: relative;

          display: grid;

          grid-template-columns:
            90px 1fr;

          gap: 30px;

          min-height: 130px;
        }


        .step-number {
          position: relative;

          z-index: 2;

          width: 68px;

          height: 68px;

          display: flex;

          align-items: center;

          justify-content: center;

          margin: 0 auto;

          border-radius: 50%;

          background: #16834b;

          color: #ffffff;

          font-size: 16px;

          font-weight: 800;

          box-shadow:
            0 0 0 8px #e8f4ed;
        }


        .step-content {
          padding: 0 0 35px;
        }


        .step-content h3 {
          margin: 4px 0 9px;

          color: #071a3a;

          font-size: 21px;
        }


        .step-content p {
          max-width: 700px;

          margin: 0;

          color: #687386;

          font-size: 15px;

          line-height: 1.75;
        }


        .step-connector {
          position: absolute;

          z-index: 1;

          top: 70px;

          left: 44px;

          width: 2px;

          height: calc(100% - 65px);

          background: #c9ded1;
        }


        @media (max-width: 700px) {

          .container {
            width: calc(100% - 36px);
          }


          .steps-section {
            padding: 80px 0;
          }


          .step-row {
            grid-template-columns:
              65px 1fr;

            gap: 18px;
          }


          .step-number {
            width: 54px;

            height: 54px;

            font-size: 13px;
          }


          .step-connector {
            left: 31px;

            top: 57px;
          }


          .step-content h3 {
            font-size: 18px;
          }


          .step-content p {
            font-size: 14px;
          }

        }

      `}</style>

    </section>
  );
}