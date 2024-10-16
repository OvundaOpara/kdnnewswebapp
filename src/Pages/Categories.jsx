import React, { useEffect, useState } from 'react'
import Cate_Hero from '../Components/Categories/Home/Cate_Hero'
import News from '../Components/Categories/News/News'
import Cate_Articles from '../Components/Categories/Articles/Cate_Articles'
import Recommendation from '../Components/Home/AIrecommendation/Recommendation'
import FIlterModal from '../Components/FIlterModal'

const Categories = () => {
  //MODAL TOOLTIP
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };


  //ADDLING PROPS FOR REUSED COMPONENTS
  const headline = "Popular News"
  const heading = "AI Recommendations"

  return (


    <div>
      {showModal && <FIlterModal closeModal={handleCloseModal} />}
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