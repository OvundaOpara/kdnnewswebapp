import React from 'react'
import Hero from '../Components/Home/Hero/Hero'
import ImageHero from '../Components/Home/Image/ImageHero'
import Recommendation from '../Components/Home/AIrecommendation/Recommendation'
import Articles from '../Components/Home/Hero/Articles/Articles'
import Quizzes from '../Components/Home/Quizzes/Quizzes'
import Subscribe from '../Components/Home/Subscribe/Subscribe'
import Ads from '../Components/Home/Ads/Ads'

const Home = () => {
  const heading = 'AI Recommendations'
  return (
    <div>
      <Hero />
      <ImageHero />
      <Recommendation heading={heading} />
      <Articles />
      <Ads />
      <Quizzes />
      <Subscribe />
    </div>
  )
}

export default Home
