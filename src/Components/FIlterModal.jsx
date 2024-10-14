import React from 'react'

const FIlterModal = ({closeModal}) => {

    const handleFilterItems = () => {
        
        closeModal(); // Close the modal after filtering
      };


  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50  '>
      <div className='bg-black text-white p-8 rounded-lg w-full max-w-2xl shadow-lg'>
        <h2 className='text-2xl mb-6'>Filter Content Just for You</h2>

        {/* Filter Options */}
        <div className='mb-6 space-y-2 '>
          <h2 className='text-base mb-4 text-stone-500'>RESOURCES</h2>
          <div className='flex items-center justify-between'>
            <div className='flex-col flex space-y-6'>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' /> Movies
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' /> Sport
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' />{' '}
                Hollywood
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' />{' '}
                Politics
              </label>
            </div>
            <div className='flex-col flex space-y-6'>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' /> Movies
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' /> Sport
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' />{' '}
                Hollywood
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' />{' '}
                Politics
              </label>
            </div>
            <div className='flex-col flex space-y-6'>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' /> Movies
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' /> Sport
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' />{' '}
                Hollywood
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox mr-2' />{' '}
                Politics
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col mb-5'>
          <h2 className='text-base mb-4 text-stone-500'>TAILORED TO</h2>
          <label className='flex items-center'>
            <input type='checkbox' className='form-checkbox mr-2' />
            AI Recommendation
          </label>
        </div>
        <hr className='mb-5' />
        <div className='flex justify-end gap-10'>
          <button onClick={handleFilterItems} className='border-[#CF0807] border-[2px] uppercase px-4 py-2 rounded'>
            Clear
          </button>
          <button onClick={handleFilterItems} className='bg-[#CF0807] uppercase hover:bg-[#cf0707c0] px-4 py-2 rounded'>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default FIlterModal
