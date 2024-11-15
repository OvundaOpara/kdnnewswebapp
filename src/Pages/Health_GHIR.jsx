import React from 'react'
import Hero from '../Components/Health_GHIR/Hero'
import News from '../Components/Health_GHIR/News'
import Health_Articles from '../Components/Health_GHIR/Health_Articles'
import Recommendation from '../Components/Health_GHIR/Recommendation'
import Health_SubTitle from '../Components/Health_GHIR/Health_SubTitle'
import Ads from '../Components/Health_GHIR/Ads'

const Health_GHIR = () => {
  const heading = 'Popular Health Information'
  const Aiheading = 'AI Recommendations'
  return (
    <div>
      <Hero />
      <Health_SubTitle/>
      <News headline={heading} />
      <News />
      <News />
      <Ads/>
      <Health_Articles />
      <Recommendation heading={Aiheading} />
      <Recommendation />
    </div>
  )
}

export default Health_GHIR
