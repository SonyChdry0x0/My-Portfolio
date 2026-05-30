import React from 'react'
import logo from './assets/logo.jpg'
function App() {
  return (
    <nav className='mx-10 mt-4 flex-wrap'>
      <div className=' bg-gray-900 rounded-full text-white flex justify-between items-center px-6 py-3'>
        <div className=' flex  gap-3 items-center font-bold text-2xl'>
          <img className='rounded-full w-12 h-12  ' src="{logo}" alt="logo" />
          <h1>Sony <span className='text-[blue]'>Chaudhary</span></h1>

        </div>
        <div className='flex  gap-6  mr-6'>
          <div className='flex  gap-6  items-center'>
          <a className='hover:text-blue-600' href="#">ABOUT</a>
          <a className='hover:text-blue-600' href="#">SKILLS</a>
          <a className='hover:text-blue-600' href="#">PROJECTS</a>
          <a className='hover:text-blue-600' href="#">EXPERIENCE</a>
          <a className='hover:text-blue-600' href="#">CONTACT</a>
          </div>
          
          

          <button className='w-28 h-auto bg-blue-700 flex items-center justify-center font-semibold rounded-full p-2 '>Let's Talk</button>

          
        </div>
        
      </div>
    </nav>
  )
}

export default App