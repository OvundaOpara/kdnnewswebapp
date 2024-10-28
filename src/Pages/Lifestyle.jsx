import React from 'react'
import Hero from '../Components/LifeStyles/Hero'
import News from '../Components/LifeStyles/News'
import Lifestyle_Articles from '../Components/LifeStyles/Lifestyle_Articles'
import Recommendation from '../Components/LifeStyles/Recommendation'

const Lifestyle = () => {
   const heading = 'Popular Lifestyles'
  const Aiheading = 'AI Recommendations'
  return (
    <div>
      <Hero />
      <News headline={heading} />
      <News />
      <News />
      <Lifestyle_Articles />
      <Recommendation heading={Aiheading} />
      <Recommendation />
    </div>
  )
}

export default Lifestyle
