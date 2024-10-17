import React from 'react'
import Hero from '../../../Filtered_Components/Sports/Hero'
import News from '../../../Filtered_Components/Sports/News'
import Sports_Articles from '../../../Filtered_Components/Sports/Sports_Articles'
import Recommendation from '../../../Filtered_Components/Movies/Recommendation'

const Sport_index = () => {
  const heading = "Popular Sports"
  const Aiheading = "AI Recommendations"
  return (
    <div>
      <Hero />
      <News headline={heading}/>
      <News/>
      <News/>
      <Sports_Articles/>
      <Recommendation heading={Aiheading}/>
      <Recommendation/>
    </div>
  )
}

export default Sport_index
