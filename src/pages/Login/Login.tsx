import React from 'react'
import Header from '../../component/Home/Header/Header'
import LoginComponent from '../../component/LoginComponent/LoginComponent'

function Login() {
    return (
        <section className="content">
            <div className="integrationsPortal-wrapper">
                <Header isSticky={true}/>
                <LoginComponent/>
            </div>
        </section>
    )
}

export default Login