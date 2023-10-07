import React from 'react'
import Avtar from '../../assets/avtar.png'
const Dashboard = () => {
  const contacts = [
    {
      name: 'ganesh',
      status: 'Available',
      img: Avtar,
    },
    {
      name: 'himanshu',
      status: 'Available',
      img: Avtar,
    },
    {
      name: 'rituraj',
      status: 'Available',
      img: Avtar,
    },
    {
      name: 'divyanshu',
      status: 'Available',
      img: Avtar,
    },
  ]
  return (
    <div className='w-screen flex'>
      <div className='w-[25%] border border-black h-screen bg-white'>
        <div className='flex items-center my-8 mx-3'>
          <img src={Avtar} alt="src" width={50} height={75} />
          <div className='ml-8'>
            <h3 className='text-2xl'>Tutorials Dev</h3>
            <p className='text-lg font-light'>My Account</p>
          </div>
        </div>
        <hr />
        <div className='mx-14 mt-10'>
          <div className='text-buttonColor text-lg'>Message</div>
          <div>
            {
              contacts.map(({ name, status, img }) => {
                return (
                  <div className='flex items-center my-2 py-4 border-b border-b-primary'>
                    <div className='cursor-pointer flex items-center'>
                      <div><img src={img} alt="src" width={30} height={30} /></div>
                      <div className='ml-6'>
                        <h3 className='text-lg font-semibold'>{name}</h3>
                        <p className='text-lg font-light text-primary'>{status}</p>
                      </div>
                    </div>
                  </div>
                )
              }
              )}
          </div>
        </div>
      </div>
      <div className='w-[50%]  h-screen flex flex-col items-center bg-gray-200'>
        <div className='w-[75%] bg-slate-400 h-[55px] mt-8 rounded-full flex items-center px-15'>
          <div className='mb-1 cursor-pointer'><img src={Avtar} alt="src" width={55} height={60} /></div>
          <div className='ml-6 mr-auto'>
            <h3 className='text-full ml-2 font-semibold'>Anchal</h3>
            <p className='text-sm ml-3 font-light text-buttonColor'>Online</p>
          </div>
          <div className='mr-8 cursor-pointer '>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-fog" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 16a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
              <path d="M5 20l14 0" />
            </svg>
          </div>
        </div>
        <div className='h-[75%]  w-full overflow-y-auto scrollBar border-b border-gray-00'>
          <div className='px-10 py 14 border-b border-light '>
            <div className='max-w-[40%] text-white bg-black rounded-b-xl rounded-tr-xl mt-9 p-4'>
              Lorem ipsum dolor si
            </div>
            <div className='max-w-[40%] bg-white rounded-b-xl rounded-tl-xl ml-auto p-4 text-black'>
              Lorem, ipsum dolor sit
            </div>
            <div className='max-w-[40%] text-white bg-black rounded-b-xl rounded-tr-xl mt-9 p-4'>
              Lorem ipsum dolor sit
            </div>
            <div className='max-w-[40%] bg-white rounded-b-xl rounded-tl-xl ml-auto p-4 text-black'>
              Lorem, ipsum dolor
            </div>
            <div className='max-w-[40%] text-white bg-black rounded-b-xl rounded-tr-xl mt-9 p-4'>
              Lorem ipsum dolor sit
            </div>
            <div className='max-w-[40%] bg-white rounded-b-xl rounded-tl-xl ml-auto p-4 text-black'>
              Lorem, ipsum dolor
            </div>
            <div className='max-w-[40%] text-white bg-black rounded-b-xl rounded-tr-xl mt-9 p-4'>
              Lorem ipsum dolor sit
            </div>
            <div className='max-w-[40%] bg-white rounded-b-xl rounded-tl-xl ml-auto p-4 text-black'>
              Lorem, ipsum dolor
            </div>
            <div className='max-w-[40%] text-white bg-black rounded-b-xl rounded-tr-xl mt-9 p-4'>
              Lorem ipsum dolor sit
            </div>
            <div className='max-w-[40%] bg-white rounded-b-xl rounded-tl-xl ml-auto p-4 text-black'>
              Lorem, ipsum dolor
            </div>

          </div>
        </div>
        <div className='p-14 w-full'>
          <input placeholder='Tpye a messag....' className='w-full' inputClassName='p-4 border-90 shadow-md rounded-full bg-primary focus:ring-0 focus:border-0 outline-none p-90' />
        </div>
      </div>
      <div className='w-[25%] border border-black h-screen '></div>
    </div>
  )
}

export default Dashboard
