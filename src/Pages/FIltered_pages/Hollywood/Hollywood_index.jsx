import React from 'react'
import Hero from '../../../Filtered_Components/NollyWood/Hero'
import Hollywood_Articles from '../../../Filtered_Components/NollyWood/Hollywood_Articles'
import News from '../../../Filtered_Components/NollyWood/News'
import Recommendation from '../../../Filtered_Components/NollyWood/Recommendation'

const Hollywood_index = () => {
  const heading = 'Popular Stories'
  const Aiheading = 'AI Recommendations'
  return (
    <div>
      <Hero />
      <News headline={heading}/>
      <News/>
      <News/>
      <Hollywood_Articles />
      <Recommendation heading={Aiheading}/>
      <Recommendation/>
    </div>
  )
}

export default Hollywood_index
