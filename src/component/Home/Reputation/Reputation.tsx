import React from 'react'
import src from '../../../assets/images/partners/ebaymotors.png'
function Reputation() {
  return (
    <section className="reputation">
            <div className="section-container">
                <ul className="reputation-inner">
                    <li className="reputation-item reputation-item--stats">
                        <div className="reputation-stats">
                            <span className="reputation-stats-value">$5,000,000,000+</span>
                            <span className="reputation-stats-label">USD Processed</span>
                        </div>
                    </li>
                    <li className="reputation-item reputation-item--stats">
                        <div className="reputation-stats">
                            <span className="reputation-stats-value">1,400,000+</span>
                            <span className="reputation-stats-label">Customers Trust Escrow</span>
                        </div>
                    </li>
                    <li className="reputation-item reputation-item--bbb">
                        <span className="reputation-logo reputation-logo--bbb">
                            <span className="is-accessibly-hidden">BBB Torch Awards</span>
                        </span>
                        <span className="reputation-logo-content">
                            <span className="reputation-logo-title">BBB Torch Awards</span>
                            <span className="reputation-logo-desc">Winner of 2017 Award for Ethics</span>
                        </span>
                    </li>
                    <li className="reputation-item">
                        <span className="reputation-logo reputation-logo--bbbAccredited">
                            <span className="is-accessibly-hidden">BBB Accredited</span>
                        </span>
                    </li>
                    <li className="reputation-item reputation-item--dbo">
                        <span className="reputation-logo reputation-logo--dbo">
                            <span className="is-accessibly-hidden">DBO</span>
                        </span>

                    </li>
                    <li className="reputation-item reputation-item--usCommercial">
                        <span className="reputation-logo reputation-logo--usCommercial">
                            <span className="is-accessibly-hidden">US Commercial</span>
                        </span>
                    </li>
                    <li className="reputation-item reputation-item--ebayMotors">
                        <img src={src} alt="Ebay Motors Logo" className="header-logo-img"/>
                    </li>
                </ul>
            </div>
        </section>
  )
}

export default Reputation