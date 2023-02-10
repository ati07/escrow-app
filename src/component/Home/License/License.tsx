import React from 'react'
import src from '../../../assets/images/sections/licensing/map.png'
function License() {
  return (
    <section className="section licensing" id="licensing">
                <div className="section-container licensing-container">
                    <div className="grid grid--verticalCenter">
                        <div className="grid-col grid-col--desktopSmall-6 media--hidden@tablet">
                            <img src={src} className="licensing-img" alt="The most trusted, licensed online escrow service in the world"/>
                        </div>
                        <div className="grid-col grid-col--desktopSmall-6 grid-col--flushRight">
                            <h2 className="sectionHeading-title" role="heading">The most trusted, licensed online escrow
                                service in the world</h2>
                            <div className="licensing-subtitle">Headquartered in California, Escrow.com is licensed, bonded
                                and regularly audited.</div>
                            <p className="sectionHeading-subTitle">Government agencies perform regular audits of
                                independently licensed escrow companies. The audit examinations serve to protect public
                                funds, determine safety and soundness of operations and determine compliance with escrow
                                statutes and regulations.</p>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default License