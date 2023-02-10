import React from 'react'
import Banner from '../../component/Home/Banner/Banner'
import Footer from '../../component/Home/Footer/Footer'
import Header from '../../component/Home/Header/Header'
import HowToWork from '../../component/Home/HowToWork/HowToWork'
import License from '../../component/Home/License/License'
import PartnerQuotes from '../../component/Home/PartnerQuotes/PartnerQuotes'
import PartnerSection from '../../component/Home/PartnerSection/PartnerSection'
import Reputation from '../../component/Home/Reputation/Reputation'
import Section from '../../component/Home/Section/Section'
import Section1 from '../../component/Home/Section1/Section1'
import Section2 from '../../component/Home/Section2/Section2'
import Services from '../../component/Home/Services/Services'
import Subscribe from '../../component/Home/Subscribe/Subscribe'

function Home() {
  return (
    <section className="content">
      <section className="sectionHero sectionHero--calculator">
        <Header/>
        <Banner/>
      </section>
      <Reputation/>
      <main role='main'>
      <PartnerSection/>
      <HowToWork/>
      <Services/>
      <Subscribe/>
      <PartnerQuotes/>
      <Section/>
      <Section1/>
      <Section2/>
      <License/>
      </main>
      <Footer/>
    </section>
    
  )
}

export default Home