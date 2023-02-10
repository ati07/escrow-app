import React from 'react'
import src from '../../../assets/images/sections/apiIntroduction/api-integrations.png'

function Section2() {
  return (
    <section className="section apiIntroduction">
                <div className="section-container">
                    <div className="grid">
                        <div className="grid-col grid-col--desktopSmall-5  grid-col--flushLeft media--hidden@tablet">
                            <figure className="apiIntroduction-figure media--hidden@tablet">
                                <img src={src} className="apiIntroduction-img" alt="Escrow API"/>
                            </figure>
                        </div>
                        <div className="grid-col grid-col--desktopSmall-6">
                            <div className="sectionHeading sectionHeading--alignRight">
                                <h2 className="apiIntroduction-title sectionHeading-title">Escrow API</h2>
                            </div>
                            <p className="apiIntroduction-desc">Payments for your website, marketplace, classNameified site,
                                shopping cart or mobile app with no chargebacks, ever.</p>
                            <ul>
                                <li className="apiIntroduction-feature">
                                    <svg className="apiIntroduction-icon" width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.082 16.54l-5.99-4.843c-.395-.384-1.034-.384-1.427 0-.394.384-.394 1.006 0 1.39l5.19 4.198-5.19 4.198c-.394.383-.394 1.006 0 1.39.393.385 1.032.385 1.426 0l5.992-4.843c.21-.205.3-.477.285-.745.014-.268-.075-.54-.285-.745zM9.065 21.482l-5.19-4.197 5.19-4.197c.394-.385.394-1.008 0-1.39-.393-.386-1.032-.386-1.426 0L1.647 16.54c-.21.204-.3.477-.285.745-.014.268.075.54.285.745l5.99 4.843c.395.385 1.034.385 1.427 0 .394-.384.394-1.007 0-1.39zm14.26-17.35c-.48-.27-1.09-.11-1.366.358L9.46 28.577c-.278.47-.163 1.186.365 1.34.645.186 1.09.11 1.366-.36L23.69 5.47c.277-.47.113-1.067-.365-1.338z" fill-rule="evenodd"></path>
                                    </svg>
                                    <div className="apiIntroduction-feature-content">
                                        <h3 className="apiIntroduction-feature-title">
                                            Built for developers, by developers </h3>
                                        <p className="apiIntroduction-feature-desc">
                                            Any business can integrate the safety and security of escrow payments to
                                            their platform as simply as common payment methods such as Stripe. </p>
                                    </div>
                                </li>
                                <li className="apiIntroduction-feature">
                                    <svg className="apiIntroduction-icon" width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.873 5.617V18c0 3.6 3.95 7.952 12.125 12.76 8.054-3.633 11.875-7.9 11.875-12.76V5.617l-12-2.572-12 2.572zM2.873 4l14-3 14 3v14c0 6-4.666 11-14 15-9.333-5.333-14-10.333-14-15V4zm19.704 5.496l-6.395 11.08-3.578-3.3c-.378-.4-1.01-.42-1.414-.04-.403.37-.424 1.01-.046 1.41l4.572 4.22c.377.4 1.01.42 1.413.04.12-.11 7.18-12.41 7.18-12.41.275-.47.11-1.09-.367-1.36-.48-.28-1.09-.11-1.366.36z" fill-rule="nonzero"></path>
                                    </svg>
                                    <div className="apiIntroduction-feature-content">
                                        <h3 className="apiIntroduction-feature-title">
                                            Protecting both buyers and sellers </h3>
                                        <p className="apiIntroduction-feature-desc">Using escrow, buyers get to inspect the
                                            goods or services before accepting them, protecting the buyer. Likewise,
                                            sellers are protected from counterparty risk by no chargeback, ever.</p>
                                    </div>
                                </li>
                            </ul>
                            <a href="/api" className="btn btn--secondary  btn--hollow apiIntroduction-cta btn--large ">Integrate Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Section2