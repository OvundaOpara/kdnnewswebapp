import React from 'react'
import Hero from '../../../Filtered_Components/LifeStyles/Hero'
import News from '../../../Filtered_Components/LifeStyles/News'
import Lifestyle_Articles from '../../../Filtered_Components/LifeStyles/Lifestyle_Articles'
import Recommendation from '../../../Filtered_Components/LifeStyles/Recommendation'

const Lifestyle_index = () => {
  const heading = 'Popular Lifestyles'
  const Aiheading = 'AI Recommendations'
  return (
    <div>
      <Hero />
      <News headline={heading} />
      <News />
      <News />
      <Lifestyle_Articles/>
      <Recommendation heading={Aiheading} />
      <Recommendation  />
    </div>
  )
}

export default Lifestyle_index
