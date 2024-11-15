import React, { useEffect, useState } from 'react'
import { FaRegClock } from 'react-icons/fa'
import { author } from '../../../assets/Images'
import { FaBookmark } from 'react-icons/fa6'
import { SlOptionsVertical } from 'react-icons/sl'
import { TRENDING } from '../../../Data/Datas'
import { CiImageOn } from 'react-icons/ci'
import { MdOutlineShare } from 'react-icons/md'
import { FaFacebook, FaTelegram  } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Trending = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false)
  const [isShareVisible, setIsShareVisible] = useState(false)

  const showMessage = () => {
    setIsMessageVisible(true)
  }

  useEffect(() => {
    if (isMessageVisible) {
      const timer = setTimeout(() => {
        setIsMessageVisible(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isMessageVisible])

  return (
    <div className=' flex flex-col lg:px-5 xl:px-5 px-5 my-10'>
      <p className='text-white bg-[#CF0807] mb-6 py-2 lg:w-[10%] w-[200px] text-center rounded-lg'>
        Trending
      </p>

      <div className='flex flex-col '>
        <div className=' flex flex-col lg:flex-row xl:flex-row mb-4 items-start justify-between'>
          <div className='flex flex-col  items-start justify-start'>
            <h1 className='text-stone-400 lg:text-5xl text-2xl xl:w-[80%] w-full font-bold '>
              The Power Of Connection Building Meaningful Relationship
            </h1>
            <div className='flex items-center my-4 justify-start gap-5 '>
              <p className='text-stone-400 text-sm flex items-center gap-1 justify-center'>
                {' '}
                <FaRegClock /> 23 Sept 2024{' '}
              </p>
              <p className='text-stone-400 flex items-center text-sm gap-2'>
                {' '}
                <img
                  src={author}
                  alt=''
                  width={20}
                  className='rounded-full'
                />{' '}
                <span className='text-stone-300'>by</span> Stark{' '}
              </p>
            </div>
          </div>
          <div className='flex items-start relative justify-start gap-7 '>
            {isMessageVisible && (
              <div className='w-[135px] px-5 bg-stone-600 text-center text-white absolute flex items-center justify-center top-12 right-8 rounded-lg'>
                <p className=''>Save Successful</p>
              </div>
            )}
            <FaBookmark
              onClick={showMessage}
              className='text-stone-800 cursor-pointer  text-5xl rounded-full p-3   bg-stone-300'
            />

            <MdOutlineShare onClick={() => setIsShareVisible(prev => !prev)} className='text-stone-800 cursor-pointer  text-5xl rounded-full p-3   bg-stone-300' />
            {isShareVisible && (
              <div className='w-[185px] gap-[16px] py-2 px-5 bg-stone-600 text-center text-white absolute flex flex-col items-center justify-center top-12 right-1  rounded-lg'>
                <p className='text-[20px] flex items-center gap-[8px] w-[125px] text-center cursor-pointer '><FaFacebook className='text-blue-600 bg-white rounded-full '/> Facebook</p>
                <p className='text-[20px] flex items-center gap-[8px] w-[125px] text-center cursor-pointer '><IoLogoWhatsapp className='text-green-600 bg-white rounded-full'/>WhatsApp</p>
                <p className='text-[20px] flex items-center gap-[8px] w-[125px] text-center cursor-pointer '><FaTelegram className='text-blue-700 bg-white rounded-full'/>Telegram</p>
                
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=' mb-6 flex gap-10 flex-col lg:flex-col xl:flex-row'>
        <div className='flex flex-col w-full lg:w-[100%] xl:w-[80%]'>
          <h1 className='text-stone-300 mb-6 text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            expedita ullam molestiae similique! Repellendus labore
            exercitationem laboriosam sunt fuga! Officiis eaque repudiandae
            tenetur quasi officia. Voluptatem quia sint molestiae ipsa adipisci.
            Expedita quidem ad provident voluptatum temporibus possimus ipsum
            sequi eum velit dignissimos, a amet, harum nisi ipsa. Ad ea fugiat
            laudantium quia voluptates sunt dolorem! Labore qui quo aliquid
            rerum amet. Distinctio, tempora odit ratione dignissimos officia
            unde perspiciatis vitae beatae totam itaque assumenda suscipit quo
            nobis cum nisi non laboriosam. Commodi aliquam pariatur amet?
            Assumenda quo corporis impedit aspernatur enim amet sapiente, eaque
            in tempore officia qui alias dolor fugiat nam! Voluptas, unde nemo
            laudantium doloremque laboriosam quod repudiandae culpa suscipit sed
            error quasi harum quis, soluta quo similique vero nisi tempore
            officiis aperiam obcaecati asperiores autem, distinctio eius.
            Debitis veniam pariatur quisquam placeat ad iste illum facilis
            assumenda nam, doloribus ullam provident quo in optio animi esse
            eaque! Laboriosam fugit pariatur quasi temporibus explicabo,
            reprehenderit qui in? Voluptatem ea ratione pariatur distinctio
            asperiores! Est, nisi quod tempore in facere molestiae quibusdam
            numquam tenetur cupiditate eveniet nostrum iure deserunt. Blanditiis
            est ullam odio saepe dolorem sapiente vitae deserunt, consectetur id
            commodi distinctio maiores. Tempore quasi corrupti numquam
            consequatur, perferendis recusandae quo dolore quaerat officiis
            accusantium assumenda asperiores beatae modi voluptate. Nemo eos
            assumenda molestiae neque vero. Accusamus, dolorum. Ipsam, quae
            ipsum eaque repellendus sed quisquam enim corporis, nemo tenetur
            velit harum vel omnis sunt sequi ea reprehenderit! Nostrum, dolores
            laboriosam! Eligendi aperiam architecto facere tempora voluptatum
            ullam vel non fugiat! Fuga quasi facere molestias tenetur suscipit
            nulla dolores inventore distinctio! Eum aperiam, repellat tenetur
            iure laborum recusandae nostrum labore maiores hic harum quod!
            Velit, totam harum, aperiam enim similique veritatis reiciendis
            quasi debitis, aliquid officiis magni earum voluptatum! Magni
            itaque, corrupti praesentium ipsam odio aliquid qui? Molestias, ea.
          </h1>
          <h1 className='text-stone-300 mb-6 text-xl '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            expedita ullam molestiae similique! Repellendus labore
            exercitationem laboriosam sunt fuga! Officiis eaque repudiandae
            tenetur quasi officia. Voluptatem quia sint molestiae ipsa adipisci.
            Expedita quidem ad provident voluptatum temporibus possimus ipsum
            sequi eum velit dignissimos, a amet, harum nisi ipsa. Ad ea fugiat
            laudantium quia voluptates sunt dolorem! Labore qui quo aliquid
            rerum amet. Distinctio, tempora odit ratione dignissimos officia
            unde perspiciatis vitae beatae totam itaque assumenda suscipit quo
            nobis cum nisi non laboriosam. Commodi aliquam pariatur amet?
            Assumenda quo corporis impedit aspernatur enim amet sapiente, eaque
            in tempore officia qui alias dolor fugiat nam! Voluptas, unde nemo
            laudantium doloremque laboriosam quod repudiandae culpa suscipit sed
            error quasi harum quis, soluta quo similique vero nisi tempore
            officiis aperiam obcaecati asperiores autem, distinctio eius.
            Debitis veniam pariatur quisquam placeat ad iste illum facilis
            assumenda nam, doloribus ullam provident quo in optio animi esse
            eaque! Laboriosam fugit pariatur quasi temporibus explicabo,
            reprehenderit qui in? Voluptatem ea ratione pariatur distinctio
            asperiores! Est, nisi quod tempore in facere molestiae quibusdam
            numquam tenetur cupiditate eveniet nostrum iure deserunt. Blanditiis
            est ullam odio saepe dolorem sapiente vitae deserunt, consectetur id
            commodi distinctio maiores. Tempore quasi corrupti numquam
            consequatur, perferendis recusandae quo dolore quaerat officiis
            accusantium assumenda asperiores beatae modi voluptate. Nemo eos
            assumenda molestiae neque vero. Accusamus, dolorum. Ipsam, quae
            ipsum eaque repellendus sed quisquam enim corporis, nemo tenetur
            velit harum vel omnis sunt sequi ea reprehenderit! Nostrum, dolores
            laboriosam! Eligendi aperiam architecto facere tempora voluptatum
            ullam vel non fugiat! Fuga quasi facere molestias tenetur suscipit
            nulla dolores inventore distinctio! Eum aperiam, repellat tenetur
            iure laborum recusandae nostrum labore maiores hic harum quod!
            Velit, totam harum, aperiam enim similique veritatis reiciendis
            quasi debitis, aliquid officiis magni earum voluptatum! Magni
            itaque, corrupti praesentium ipsam odio aliquid qui? Molestias, ea.
          </h1>
          <h1 className='text-stone-300 mb-6 text-xl '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            expedita ullam molestiae similique! Repellendus labore
            exercitationem laboriosam sunt fuga! Officiis eaque repudiandae
            tenetur quasi officia. Voluptatem quia sint molestiae ipsa adipisci.
            Expedita quidem ad provident voluptatum temporibus possimus ipsum
            sequi eum velit dignissimos, a amet, harum nisi ipsa. Ad ea fugiat
            laudantium quia voluptates sunt dolorem! Labore qui quo aliquid
            rerum amet. Distinctio, tempora odit ratione dignissimos officia
            unde perspiciatis vitae beatae totam itaque assumenda suscipit quo
            nobis cum nisi non laboriosam. Commodi aliquam pariatur amet?
            Assumenda quo corporis impedit aspernatur enim amet sapiente, eaque
            in tempore officia qui alias dolor fugiat nam! Voluptas, unde nemo
            laudantium doloremque laboriosam quod repudiandae culpa suscipit sed
            error quasi harum quis, soluta quo similique vero nisi tempore
            officiis aperiam obcaecati asperiores autem, distinctio eius.
            Debitis veniam pariatur quisquam placeat ad iste illum facilis
            assumenda nam, doloribus ullam provident quo in optio animi esse
            eaque! Laboriosam fugit pariatur quasi temporibus explicabo,
            reprehenderit qui in? Voluptatem ea ratione pariatur distinctio
            asperiores! Est, nisi quod tempore in facere molestiae quibusdam
            numquam tenetur cupiditate eveniet nostrum iure deserunt. Blanditiis
            est ullam odio saepe dolorem sapiente vitae deserunt, consectetur id
            commodi distinctio maiores. Tempore quasi corrupti numquam
            consequatur, perferendis recusandae quo dolore quaerat officiis
            accusantium assumenda asperiores beatae modi voluptate. Nemo eos
            assumenda molestiae neque vero. Accusamus, dolorum. Ipsam, quae
            ipsum eaque repellendus sed quisquam enim corporis, nemo tenetur
            velit harum vel omnis sunt sequi ea reprehenderit! Nostrum, dolores
            laboriosam! Eligendi aperiam architecto facere tempora voluptatum
            ullam vel non fugiat! Fuga quasi facere molestias tenetur suscipit
            nulla dolores inventore distinctio! Eum aperiam, repellat tenetur
            iure laborum recusandae nostrum labore maiores hic harum quod!
            Velit, totam harum, aperiam enim similique veritatis reiciendis
            quasi debitis, aliquid officiis magni earum voluptatum! Magni
            itaque, corrupti praesentium ipsam odio aliquid qui? Molestias, ea.
          </h1>
        </div>

        <div className='flex flex-col  lg:w-[100%] xl:w-[26%] w-[100%]'>
          <h1 className='text-4xl font-bold text-stone-300 '>Top stories</h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 items-center justify-center  gap-12 mt-[50px] '>
            {TRENDING.map((item, index) => (
              <div
                key={index}
                className='flex flex-col w-[100%]  group relative rounded-xl pb-2 '
              >
                <div className='flex bg-stone-600 items-center justify-center rounded-xl w-full h-[200px] transform scale-y-100 transition-transform duration-300 ease-out group-hover:scale-y-[2] origin-top '></div>
                <div className='flex flex-col px-2 mt-[10px] z-40 bg-transparent'>
                  <h1 className='text-xl text-stone-300 bg-transparent'>
                    {item.name}
                  </h1>
                  <p className='text-lg text-stone-300 my-2 bg-transparent'>
                    {item.title}
                  </p>
                  <p className='text-sm text-stone-300 bg-transparent'>
                    {item.dec}
                  </p>
                  <div className='flex items-center bg-transparent my-4 justify-start gap-5 '>
                    <p className='text-stone-400 text-sm bg-transparent flex items-center gap-1 justify-center'>
                      {' '}
                      <FaRegClock className='bg-transparent' /> 23 Sept 2024{' '}
                    </p>
                    <p className='text-stone-400 flex items-center bg-transparent text-sm gap-2'>
                      {' '}
                      <img
                        src={author}
                        alt=''
                        width={20}
                        className='rounded-full'
                      />{' '}
                      <span className='text-stone-300 bg-transparent'>by</span>{' '}
                      Stark{' '}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
