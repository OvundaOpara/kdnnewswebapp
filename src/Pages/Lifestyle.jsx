import React from 'react'
import Hero from '../Components/LifeStyles/Hero'
import News from '../Components/LifeStyles/News'
import Lifestyle_Articles from '../Components/LifeStyles/Lifestyle_Articles'
import Recommendation from '../Components/LifeStyles/Recommendation'
import Lifestyle_SubTitle from '../Components/LifeStyles/Lifestyle_SubTitle'
import Ads from '../Components/LifeStyles/Ads'

const Lifestyle = () => {
   const heading = 'Popular Lifestyles'
  const Aiheading = 'AI Recommendations'
  return (
    <div>
      <Hero />
      <Lifestyle_SubTitle/>
      <News headline={heading} />
      <News />
      <News />
      <Ads/>
      <Lifestyle_Articles />
      <Recommendation heading={Aiheading} />
      <Recommendation />
    </div>
  )
}

export default Lifestyle
