import React from 'react'

function Subscribe() {
  return (
    <section className="section--small subscribe">
                <div className="subscribe-container section-container">
                    <h2 className="subscribe-title">Get a free copy of our latest domain market report</h2>
                    <p className="subscribe-desc">
                        Alternative Investing: A Comparison Between Additional Instruments and Web Domains </p>
                    <form className="subscribe-form" action="?" target="_self" data-component="domain-report-form" data-form-name="domain-report-form">
                        <div className="subscribe-labelContainer">
                            <label className="field-label" htmlFor="field-name">
                                <span data-target="field-label-name">Email Address</span> <span className="field-validIcon"></span>
                            </label>
                        </div>
                        <div className="subscribe-inputContainer">
                            <div className="field       " data-target="field" data-field="email-address">
                                <div className="field-input">
                                    <div className="field-prefix">
                                        <div className="field-prefix-wrapper">
                                            <span className="field-prefix-label" data-component="field-prefix" data-related-name="email-address-prefix"><svg version="1.1" className="icon icon--email" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24.6 20" enable-background="new 0 0 24.6 20" xmlSpace="preserve">
                                                    <path d="M1.5,0C0.7,0,0,0.7,0,1.5v16.9C0,19.3,0.7,20,1.5,20h21.5c0.8,0,1.5-0.7,1.5-1.5V1.5c0-0.8-0.7-1.5-1.5-1.5H1.5z M22.3,2.3
	v0.6l-10,8.4l-10-8.4V2.3H22.3z M2.3,17.7V5.9l9,7.6c0.3,0.2,0.6,0.4,1,0.4c0.4,0,0.7-0.1,1-0.4l9-7.6v11.8H2.3z"></path>
                                                </svg></span>
                                        </div>
                                    </div> <input type="email" className="defaultInput" data-target="field-focusable" id="field-email-address" name="email-address" aria-describedby=" error-email-address" data-e2e-target="subscribe-email" autoComplete="off"/>

                                </div>
                                <div className="field-error" data-target="field-error" data-attr="error-invalid">
                                    <span className="field-errorMsg" id="error-email-address">Please enter a valid email
                                        address</span>
                                </div>
                            </div>
                        </div>
                        <div className="subscribe-btnContainer">
                            <button className="btn btn--secondary  subscribe-btn" type="submit" data-target="form-submit">Get Report
                            </button>
                        </div>
                    </form>
                    <div className="subscribe-success is-hidden" data-target="domain-report-success">
                        <svg className="subscribe-success-icon" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.995.33a6.665 6.665 0 1 0 0 13.33 6.665 6.665 0 0 0 0-13.33zm-.5 10.497L3.163 8.328l1-1.333 1.999 1.5L9.66 3.829l1.333 1-4.499 5.998z" fill="#3CB95D" fill-rule="nonzero"></path>
                        </svg>
                        <p className="subscribe-success-message">
                            Thank you for your interest! </p>
                    </div>
                </div>
            </section>
  )
}

export default Subscribe