import React from 'react'
import Hero from '../../../Filtered_Components/Movies/Hero'
import News from '../../../Filtered_Components/Movies/News'
import Movies_Articles from '../../../Filtered_Components/Movies/Movies_Articles'
import Recommendation from '../../../Filtered_Components/Movies/Recommendation'


const Movies_index = () => {
  const heading = "Popular Movies"
  const Aiheading = "AI Recommendations"

  return (
    <>
      <Hero/>
      <News headline={heading}/>
      <News/>
      <News/>
      <Movies_Articles/>
      <Recommendation heading={Aiheading}/>
      <Recommendation/>

     
    </>
  )
}

export default Movies_index