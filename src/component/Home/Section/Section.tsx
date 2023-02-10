import React from 'react'
import src from '../../../assets/images/escrow-pay/home-escrow-pay.png'

function Section() {
    return (
        <section className="section apiIntroduction">
            <div className="section-container">
                <div className="grid grid--verticalCenter">
                    <div className="grid-col grid-col--desktopSmall-5">
                        <figure className="apiIntroduction-figure media--hidden@tablet">
                            <img src={src} className="apiIntroduction-img apiIntroduction-img--pay" alt="Escrow Pay: Secure payments in one line of code." />
                        </figure>
                    </div>
                    <div className="grid-col grid-col--desktopSmall-6 grid-col--flushRight">
                        <div className="sectionHeading sectionHeading--alignLeft">
                            <h2 className="apiIntroduction-title sectionHeading-title">Escrow Pay: Secure payments in
                                one line of code.</h2>
                        </div>
                        <p className="apiIntroduction-desc">
                            Escrow Pay is the simplest way to add escrow payments to your website, mobile app,
                            online store, classNameified site or marketplace. </p>
                        <a href="/pay" className="btn btn--secondary  btn--hollow btn--large ">Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section