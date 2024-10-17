import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { author } from '../../../assets/Images'
import { FaBookmark } from 'react-icons/fa6'
import { SlOptionsVertical } from 'react-icons/sl'
import { TRENDING } from '../../../Data/Datas'
import { CiImageOn } from 'react-icons/ci'

const Trending = () => {
  return (
    <div className='lg:px-24 flex flex-col px-9 my-10'>
      <p className='text-white bg-[#CF0807] mb-6 py-2 lg:w-[10%] w-[200px] text-center rounded-lg'>
        Trending
      </p>

      <div className='flex flex-col'>
        <div className='flex gap-4  items-start mb-8 justify-between'>
          <div className='flex flex-col  w-[80%]'>
            <h1 className='text-stone-400 lg:text-5xl text-3xl font-bold '>
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
          <div className='flex items-start justify-end gap-7 w-[20%]'>
            <FaBookmark className='text-stone-800  text-4xl rounded-md p-2   bg-stone-300' />
            <SlOptionsVertical className='text-stone-800  text-4xl rounded-md p-2   bg-stone-300' />
          </div>
        </div>

        <div className='flex flex-wrap gap-6 mb-6'>
          <div className='flex flex-col lg:w-[75%] w-[100%] '>
            <h1 className='text-stone-300 mb-6 text-xl '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi expedita ullam molestiae similique! Repellendus labore
              exercitationem laboriosam sunt fuga! Officiis eaque repudiandae
              tenetur quasi officia. Voluptatem quia sint molestiae ipsa
              adipisci. Expedita quidem ad provident voluptatum temporibus
              possimus ipsum sequi eum velit dignissimos, a amet, harum nisi
              ipsa. Ad ea fugiat laudantium quia voluptates sunt dolorem! Labore
              qui quo aliquid rerum amet. Distinctio, tempora odit ratione
              dignissimos officia unde perspiciatis vitae beatae totam itaque
              assumenda suscipit quo nobis cum nisi non laboriosam. Commodi
              aliquam pariatur amet? Assumenda quo corporis impedit aspernatur
              enim amet sapiente, eaque in tempore officia qui alias dolor
              fugiat nam! Voluptas, unde nemo laudantium doloremque laboriosam
              quod repudiandae culpa suscipit sed error quasi harum quis, soluta
              quo similique vero nisi tempore officiis aperiam obcaecati
              asperiores autem, distinctio eius. Debitis veniam pariatur
              quisquam placeat ad iste illum facilis assumenda nam, doloribus
              ullam provident quo in optio animi esse eaque! Laboriosam fugit
              pariatur quasi temporibus explicabo, reprehenderit qui in?
              Voluptatem ea ratione pariatur distinctio asperiores! Est, nisi
              quod tempore in facere molestiae quibusdam numquam tenetur
              cupiditate eveniet nostrum iure deserunt. Blanditiis est ullam
              odio saepe dolorem sapiente vitae deserunt, consectetur id commodi
              distinctio maiores. Tempore quasi corrupti numquam consequatur,
              perferendis recusandae quo dolore quaerat officiis accusantium
              assumenda asperiores beatae modi voluptate. Nemo eos assumenda
              molestiae neque vero. Accusamus, dolorum. Ipsam, quae ipsum eaque
              repellendus sed quisquam enim corporis, nemo tenetur velit harum
              vel omnis sunt sequi ea reprehenderit! Nostrum, dolores
              laboriosam! Eligendi aperiam architecto facere tempora voluptatum
              ullam vel non fugiat! Fuga quasi facere molestias tenetur suscipit
              nulla dolores inventore distinctio! Eum aperiam, repellat tenetur
              iure laborum recusandae nostrum labore maiores hic harum quod!
              Velit, totam harum, aperiam enim similique veritatis reiciendis
              quasi debitis, aliquid officiis magni earum voluptatum! Magni
              itaque, corrupti praesentium ipsam odio aliquid qui? Molestias,
              ea.
            </h1>
            <h1 className='text-stone-300 mb-6 text-xl '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi expedita ullam molestiae similique! Repellendus labore
              exercitationem laboriosam sunt fuga! Officiis eaque repudiandae
              tenetur quasi officia. Voluptatem quia sint molestiae ipsa
              adipisci. Expedita quidem ad provident voluptatum temporibus
              possimus ipsum sequi eum velit dignissimos, a amet, harum nisi
              ipsa. Ad ea fugiat laudantium quia voluptates sunt dolorem! Labore
              qui quo aliquid rerum amet. Distinctio, tempora odit ratione
              dignissimos officia unde perspiciatis vitae beatae totam itaque
              assumenda suscipit quo nobis cum nisi non laboriosam. Commodi
              aliquam pariatur amet? Assumenda quo corporis impedit aspernatur
              enim amet sapiente, eaque in tempore officia qui alias dolor
              fugiat nam! Voluptas, unde nemo laudantium doloremque laboriosam
              quod repudiandae culpa suscipit sed error quasi harum quis, soluta
              quo similique vero nisi tempore officiis aperiam obcaecati
              asperiores autem, distinctio eius. Debitis veniam pariatur
              quisquam placeat ad iste illum facilis assumenda nam, doloribus
              ullam provident quo in optio animi esse eaque! Laboriosam fugit
              pariatur quasi temporibus explicabo, reprehenderit qui in?
              Voluptatem ea ratione pariatur distinctio asperiores! Est, nisi
              quod tempore in facere molestiae quibusdam numquam tenetur
              cupiditate eveniet nostrum iure deserunt. Blanditiis est ullam
              odio saepe dolorem sapiente vitae deserunt, consectetur id commodi
              distinctio maiores. Tempore quasi corrupti numquam consequatur,
              perferendis recusandae quo dolore quaerat officiis accusantium
              assumenda asperiores beatae modi voluptate. Nemo eos assumenda
              molestiae neque vero. Accusamus, dolorum. Ipsam, quae ipsum eaque
              repellendus sed quisquam enim corporis, nemo tenetur velit harum
              vel omnis sunt sequi ea reprehenderit! Nostrum, dolores
              laboriosam! Eligendi aperiam architecto facere tempora voluptatum
              ullam vel non fugiat! Fuga quasi facere molestias tenetur suscipit
              nulla dolores inventore distinctio! Eum aperiam, repellat tenetur
              iure laborum recusandae nostrum labore maiores hic harum quod!
              Velit, totam harum, aperiam enim similique veritatis reiciendis
              quasi debitis, aliquid officiis magni earum voluptatum! Magni
              itaque, corrupti praesentium ipsam odio aliquid qui? Molestias,
              ea.
            </h1>
            <h1 className='text-stone-300 mb-6 text-xl '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi expedita ullam molestiae similique! Repellendus labore
              exercitationem laboriosam sunt fuga! Officiis eaque repudiandae
              tenetur quasi officia. Voluptatem quia sint molestiae ipsa
              adipisci. Expedita quidem ad provident voluptatum temporibus
              possimus ipsum sequi eum velit dignissimos, a amet, harum nisi
              ipsa. Ad ea fugiat laudantium quia voluptates sunt dolorem! Labore
              qui quo aliquid rerum amet. Distinctio, tempora odit ratione
              dignissimos officia unde perspiciatis vitae beatae totam itaque
              assumenda suscipit quo nobis cum nisi non laboriosam. Commodi
              aliquam pariatur amet? Assumenda quo corporis impedit aspernatur
              enim amet sapiente, eaque in tempore officia qui alias dolor
              fugiat nam! Voluptas, unde nemo laudantium doloremque laboriosam
              quod repudiandae culpa suscipit sed error quasi harum quis, soluta
              quo similique vero nisi tempore officiis aperiam obcaecati
              asperiores autem, distinctio eius. Debitis veniam pariatur
              quisquam placeat ad iste illum facilis assumenda nam, doloribus
              ullam provident quo in optio animi esse eaque! Laboriosam fugit
              pariatur quasi temporibus explicabo, reprehenderit qui in?
              Voluptatem ea ratione pariatur distinctio asperiores! Est, nisi
              quod tempore in facere molestiae quibusdam numquam tenetur
              cupiditate eveniet nostrum iure deserunt. Blanditiis est ullam
              odio saepe dolorem sapiente vitae deserunt, consectetur id commodi
              distinctio maiores. Tempore quasi corrupti numquam consequatur,
              perferendis recusandae quo dolore quaerat officiis accusantium
              assumenda asperiores beatae modi voluptate. Nemo eos assumenda
              molestiae neque vero. Accusamus, dolorum. Ipsam, quae ipsum eaque
              repellendus sed quisquam enim corporis, nemo tenetur velit harum
              vel omnis sunt sequi ea reprehenderit! Nostrum, dolores
              laboriosam! Eligendi aperiam architecto facere tempora voluptatum
              ullam vel non fugiat! Fuga quasi facere molestias tenetur suscipit
              nulla dolores inventore distinctio! Eum aperiam, repellat tenetur
              iure laborum recusandae nostrum labore maiores hic harum quod!
              Velit, totam harum, aperiam enim similique veritatis reiciendis
              quasi debitis, aliquid officiis magni earum voluptatum! Magni
              itaque, corrupti praesentium ipsam odio aliquid qui? Molestias,
              ea.
            </h1>
          </div>

          <div className='flex flex-col lg:w-[20%] w-[100%]'>
            <h1 className='text-4xl font-bold text-stone-300 '>Top stories</h1>
            <div className='flex flex-col items-center justify-center gap-12 mt-[50px] '>
              {TRENDING.map((item, index) => (
                <div className='flex flex-col w-[100%] border-[1px] border-stone-300 rounded-xl pb-2 '>
                  <div className='flex bg-stone-600 h-[200px] items-center justify-center rounded-xl w-full'></div>
                  <div className='flex flex-col px-2'>
                    <h1 className='text-xl text-stone-300'>{item.name}</h1>
                    <p className='text-lg text-stone-300 my-2'>{item.title}</p>
                    <p className='text-sm text-stone-300'>{item.dec}</p>
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
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-wrap mb-6 bg-stone-600 h-[400px] items-center justify-center rounded-xl w-[100%] lg:w-[100%]'>
            <CiImageOn className='text-white bg-stone-600 text-3xl' />
          </div>
          <p className='text-stone-200 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            molestias asperiores delectus nesciunt molestiae necessitatibus
            autem, nostrum tempore, eaque ipsam deleniti eius. Neque quia
            ducimus veritatis voluptas veniam fugiat cum autem perspiciatis
            maxime? In, repellat maxime esse exercitationem dolor sit beatae
            dolorum ex molestiae culpa voluptate nesciunt voluptas! Ipsum quae
            dolores deserunt? Dolor exercitationem maxime eos praesentium nam
            molestias similique obcaecati fugiat tenetur et? Quis nobis quidem
            deleniti ab saepe, quas nemo perferendis unde eius consequatur est
            modi reprehenderit recusandae provident illo, esse soluta itaque
            sequi. Cum tenetur aliquam, modi voluptas ratione molestiae
            voluptatem eligendi, maiores eos minima debitis officiis laborum ab
            saepe corrupti dolores quis iure? Porro, nemo assumenda dicta odit
            quaerat nesciunt possimus ipsum magnam, ad nobis inventore tenetur
            odio doloremque excepturi suscipit sed eligendi velit, iste dolor
            cumque. Ea ipsa velit, obcaecati, facere, quaerat eius quod suscipit
            sunt libero molestiae doloribus! Dolores saepe ullam, quia suscipit
            placeat consequuntur mollitia iste nisi, sit praesentium consequatur
            vitae ab esse atque nulla nobis optio fuga impedit! Iusto magnam
            expedita nulla obcaecati ab ipsa a aspernatur commodi enim
            doloremque esse eveniet necessitatibus, eum architecto rerum! Eius,
            distinctio nulla, consequuntur a ipsam voluptate nisi pariatur
            minima sit in veritatis velit animi nostrum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Trending
