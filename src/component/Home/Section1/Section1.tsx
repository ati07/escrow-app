import React from 'react'
import src from '../../../assets/images/offer/offer-introduction.png'

function Section1() {
  return (
    <section className="section apiIntroduction">
                <div className="section-container">
                    <div className="grid grid--verticalCenter">
                        <div className="grid-col grid-col--desktopSmall-6">
                            <div className="sectionHeading sectionHeading--alignLeft">
                                <h2 className="apiIntroduction-title sectionHeading-title">Introducing Escrow Offer</h2>
                            </div>
                            <p className="apiIntroduction-desc">
                                Escrow Offer allows buyers and sellers to negotiate a price for domain names, cars,
                                boats, aircraft, fine art or any high-value item on any website or mobile app through a
                                <a href="/buttons/create">Make Offer button</a> or API call - protected by the security
                                of escrow payments by Escrow.com.
                            </p>
                            <a href="/offer" className="btn btn--secondary  btn--hollow btn--large ">Learn More
                            </a>
                        </div>
                        <div className="grid-col grid-col--desktopSmall-6 grid-col--flushRight">
                            <figure className="apiIntroduction-figure media--hidden@tablet">
                                <img src={src} className="apiIntroduction-img" alt="Introducing Escrow Offer"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Section1