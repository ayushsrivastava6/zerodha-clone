import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 mb-5">

      {/* Tabs */}
      <ul className="nav nav-tabs">

        <li className="nav-item">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#equity"
          >
            Equity
          </button>
        </li>

        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#currency"
          >
            Currency
          </button>
        </li>

        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#commodity"
          >
            Commodity
          </button>
        </li>

      </ul>

      {/* Tab Content */}

      <div className="tab-content mt-4">

        {/* ================= EQUITY ================= */}

        <div className="tab-pane fade show active" id="equity">

          <div className="table-responsive">

            <table className="table table-bordered">

              <thead>

                <tr>

                  <th></th>

                  <th>Equity delivery</th>

                  <th>Equity intraday</th>

                  <th>F&amp;O - Futures</th>

                  <th>F&amp;O - Options</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>Brokerage</td>

                  <td>Zero Brokerage</td>

                  <td>0.03% or ₹20/executed order whichever is lower</td>

                  <td>0.03% or ₹20/executed order whichever is lower</td>

                  <td>Flat ₹20 per executed order</td>

                </tr>

                <tr>

                  <td>STT/CTT</td>

                  <td>0.1% on buy &amp; sell</td>

                  <td>0.025% on the sell side</td>

                  <td>0.05% on the sell side</td>

                  <td>
                    <ul>
                      <li>0.15% of intrinsic value on exercised options</li>
                      <li>0.15% on sell side (premium)</li>
                    </ul>
                  </td>

                </tr>

                <tr>

                  <td>Transaction charges</td>

                  <td>
                    NSE: 0.00307%
                    <br />
                    BSE: 0.00375%
                  </td>

                  <td>
                    NSE: 0.00307%
                    <br />
                    BSE: 0.00375%
                  </td>

                  <td>
                    NSE: 0.00183%
                    <br />
                    BSE: 0
                  </td>

                  <td>
                    NSE: 0.03553%
                    <br />
                    BSE: 0.0325%
                  </td>

                </tr>

                <tr>

                  <td>GST</td>

                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>

                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>

                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>

                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>

                </tr>

                <tr>

                  <td>SEBI charges</td>

                  <td>₹10 / crore</td>

                  <td>₹10 / crore</td>

                  <td>₹10 / crore</td>

                  <td>₹10 / crore</td>

                </tr>

                <tr>

                  <td>Stamp charges</td>

                  <td>0.015% or ₹1500/crore on buy side</td>

                  <td>0.003% or ₹300/crore on buy side</td>

                  <td>0.002% or ₹200/crore on buy side</td>

                  <td>0.003% or ₹300/crore on buy side</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* ================= CURRENCY ================= */}

        <div className="tab-pane fade" id="currency">

          <div className="table-responsive">

            <table className="table table-bordered">

              <thead>

                <tr>

                  <th></th>

                  <th>Currency Futures</th>

                  <th>Currency Options</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>Brokerage</td>

                  <td>0.03% or ₹20/executed order whichever is lower</td>

                  <td>₹20/executed order</td>

                </tr>

                <tr>

                  <td>STT/CTT</td>

                  <td>No STT</td>

                  <td>No STT</td>

                </tr>

                <tr>

                  <td>Transaction charges</td>

                  <td>
                    NSE: 0.00035%
                    <br />
                    BSE: 0.00045%
                  </td>

                  <td>
                    NSE: 0.0311%
                    <br />
                    BSE: 0.001%
                  </td>

                </tr>

                <tr>

                  <td>GST</td>

                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>

                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>

                </tr>

                <tr>

                  <td>SEBI charges</td>

                  <td>₹10 / crore</td>

                  <td>₹10 / crore</td>

                </tr>

                <tr>

                  <td>Stamp charges</td>

                  <td>0.0001% or ₹10/crore on buy side</td>

                  <td>0.0001% or ₹10/crore on buy side</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* ================= COMMODITY ================= */}

        <div className="tab-pane fade" id="commodity">

          <div className="table-responsive">

            <table className="table table-bordered">

              <thead>

                <tr>

                  <th></th>

                  <th>Commodity Futures</th>

                  <th>Commodity Options</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>Brokerage</td>

                  <td>0.03% or ₹20/executed order whichever is lower</td>

                  <td>₹20/executed order</td>

                </tr>

                <tr>

                  <td>STT/CTT</td>

                  <td>0.01% on sell side (Non-Agri)</td>

                  <td>0.05% on sell side</td>

                </tr>

                <tr>

                  <td>Transaction charges</td>

                  <td>
                    MCX: 0.0021%
                    <br />
                    NSE: 0.0001%
                  </td>

                  <td>
                    MCX: 0.0418%
                    <br />
                    NSE: 0.001%
                  </td>

                </tr>

                <tr>

                  <td>GST</td>

                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>

                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>

                </tr>

                <tr>

                  <td>SEBI charges</td>

                  <td>
                    Agri: ₹1/crore
                    <br />
                    Non-Agri: ₹10/crore
                  </td>

                  <td>₹10/crore</td>

                </tr>

                <tr>

                  <td>Stamp charges</td>

                  <td>0.002% or ₹200/crore on buy side</td>

                  <td>0.003% or ₹300/crore on buy side</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Brokerage;