import React, { useEffect, useState } from 'react'
import Cate_Hero from '../Components/Categories/Home/Cate_Hero'
import News from '../Components/Categories/News/News'
import Cate_Articles from '../Components/Categories/Articles/Cate_Articles'
import FIlterModal from '../Components/FIlterModal'
import Recommendation from '../Components/Categories/Recommendation/Recommendation'

const Categories = () => {


  //ADDLING PROPS FOR REUSED COMPONENTS
  const headline = "Popular News"
  const heading = "AI Recommendations"

  return (


    <div>
      
      <Cate_Hero/>
      <News headline={headline}/>
      <News/>
      <News/>
      <Cate_Articles/>
      <Recommendation heading={heading}/>
      <Recommendation/>
      
    </div>
  )
}

export default Categories