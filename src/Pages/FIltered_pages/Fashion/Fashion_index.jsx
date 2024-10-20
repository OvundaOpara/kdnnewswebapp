import React from 'react'
import Hero from '../../../Filtered_Components/Fashions/Hero'
import News from '../../../Filtered_Components/Fashions/News'
import Fashion_Articles from '../../../Filtered_Components/Fashions/Fashion_Articles'
import Recommendation from '../../../Filtered_Components/Fashions/Recommendation'

const Fashion_index = () => {
  const heading = 'Popular Fashions'
  const Aiheading = 'AI Recommendations'
  return (
    <div>
      <Hero />
      <News headline={heading} />
      <News />
      <News />
      <Fashion_Articles/>
      <Recommendation heading={Aiheading}/>
      <Recommendation/>
    </div>
  )
}

export default Fashion_index
