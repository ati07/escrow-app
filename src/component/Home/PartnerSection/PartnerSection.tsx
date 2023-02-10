import React from 'react'
import src from '../../../assets/images/ebay/ebay_watch_front.jpg'
import src1 from "../../../assets/images/ebayPromo/ebayGeneric.jpg"
function PartnerSection() {
    return (
        <div>
            <section className="section apiIntroduction">
                <div className="section-container">
                    <div className="grid grid--verticalCenter">
                        <div className="grid-col grid-col--desktopSmall-6 grid-col--flushLeft">
                            <div className="sectionHeading sectionHeading--alignLeft">
                                <span className="section-status">New</span>
                                <h2 className="apiIntroduction-title sectionHeading-title">Watches bought and sold on
                                    eBay with the security of Escrow.com</h2>
                            </div>
                            <p className="apiIntroduction-desc">
                                eBay has partnered with Escrow.com to help facilitate all payments on watches sold
                                for $10,000 or more in the U.S. In order to enhance the luxury watch shopping
                                experience, eBay covers any fees charged by Escrow.com for use of their service when
                                purchasing eligible watches. </p>
                            <a href="/partners/landing/ebaywatches" className="btn btn--secondary  btn--hollow btn--large ">Learn More
                            </a>
                        </div>
                        <div className="grid-col grid-col--desktopSmall-6">
                            <figure className="apiIntroduction-figure media--hidden@tablet">
                                <img src={src} className="apiIntroduction-img apiIntroduction-img--aud" alt="Escrow.com integration with eBay Watches" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section apiIntroduction">
                <div className="section-container">
                    <div className="grid grid--verticalCenter">
                        <div className="grid-col grid-col--desktopSmall-6">
                            <figure className="apiIntroduction-figure media--hidden@tablet">
                                <img src={src1} className="apiIntroduction-img apiIntroduction-img--aud" alt="Escrow.com integration with eBay Motors" />
                            </figure>
                        </div>
                        <div className="grid-col grid-col--desktopSmall-6 grid-col--flushRight">
                            <div className="sectionHeading sectionHeading--alignLeft">
                                <h2 className="apiIntroduction-title sectionHeading-title">eBay integrates Escrow.com
                                    enabling the buying and selling of vehicles online</h2>
                            </div>
                            <p className="apiIntroduction-desc">
                                Escrow.com is integrated into both the eBay Motors website and mobile app, and is
                                first digital payment option since the launch of the new eBay Motors app in December
                                2019. </p>
                            <a href="/partners/landing/ebaymotors" className="btn btn--secondary  btn--hollow btn--large ">Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PartnerSection