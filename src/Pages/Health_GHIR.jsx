import React from 'react'
import Hero from '../Components/Health_GHIR/Hero'
import News from '../Components/Health_GHIR/News'
import Health_Articles from '../Components/Health_GHIR/Health_Articles'
import Recommendation from '../Components/Health_GHIR/Recommendation'

const Health_GHIR = () => {
  const heading = 'Popular Health Information'
  const Aiheading = 'AI Recommendations'
  return (
    <div>
      <Hero />
      <News headline={heading} />
      <News />
      <News />
      <Health_Articles />
      <Recommendation heading={Aiheading} />
      <Recommendation />
    </div>
  )
}

export default Health_GHIR
