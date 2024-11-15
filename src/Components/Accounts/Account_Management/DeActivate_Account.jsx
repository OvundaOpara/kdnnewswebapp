import React from 'react'
import { Link } from 'react-router-dom'

const DeActivate_account = ({ setDeactivateModal, setUser }) => {
  const handleAccountDeactivate = () => {
    setDeactivateModal(false)
    setUser(false)
  }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 '>
      <div className='flex  items-start py-5 justify-center fixed rounded-[5px]  bg-primary7 w-[50%]  '>
        <div className='flex flex-col items-center justify-center px-[18px] gap-[16px] relative'>
          <p
            className='absolute top-[-20px] right-[20px] text-[28px] text-primary cursor-pointer'
            onClick={handleAccountDeactivate}
          >
            x
          </p>
          <h1 className='text-[30px] font-[700] text-primary6 '>
            Deactivate Account
          </h1>

          <p className='text-primary6 '>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            harum molestias nemo doloribus aliquam aliquid itaque deserunt sit
            vitae ut autem animi atque, ipsam dolores explicabo unde labore?
            Repudiandae tenetur aliquam odit facere libero laboriosam neque
            minus repellendus veniam doloribus, non optio modi aliquid tempora
            hic dolor nostrum voluptas deserunt dignissimos aspernatur at
            repellat. Omnis eaque sequi soluta numquam maiores sint, enim
            inventore impedit, tempora, quia ad odio rerum ut ea minus
            reiciendis rem tenetur mollitia dolores iusto voluptate distinctio.
            Tempore sed quod quo rerum iusto ipsa cumque dicta aut dolore
          </p>

          <div className='flex w-full items-center justify-end gap-[16px]'>
            <button
              className='bg-stone-500 text-buttonsColor py-2 px-4 rounded-md ml-4'
              onClick={() => setDeactivateModal(false)}
            >
              Cancel
            </button>
            <Link to="/"
              onClick={handleAccountDeactivate}
              className='p-2 bg-buttonsColor text-white rounded'
            >
              Deactivate Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeActivate_account
