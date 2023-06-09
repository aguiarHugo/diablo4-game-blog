import React from 'react'

const Footer = () => {
  return (
    <section className='fixed bottom-0 w-full'>
      <div className='h-8 bg-red-900 flex justify-center items-center'>
        <p>Developed by <a href="https://aguiarhugo.netlify.app/" target='__blank' className='font-bold'>Hugo Aguiar</a></p>
      </div>
    </section>
  )
}

export default Footer