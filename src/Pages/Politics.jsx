import React from 'react'
import Hero from '../Components/Politics/Hero'
import News from '../Components/Politics/News'
import Health_Articles from '../Components/Politics/Health_Articles'
import Recommendation from '../Components/Politics/Recommendation'

const Politics = () => {
  const heading = 'Popular Political News'
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

export default Politics
