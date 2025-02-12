import React from 'react'

const About = () => {
  return (
    <div className='px-[10em]'>
      {/* <div>
        <h1 className='text-[2rem]'>
          Team SCPR <br /> Un petit code change tout!
        </h1>
      </div>

      <div>
        <img src='/public/images/about.jpg' className='w-[50vw] h-[]' />
      </div> */}

      <div className='w-full flex'>
        <div className=' w-[29.5rem] h-[25rem] mt-[7rem] rounded'>
          <h1 className='text-[2rem] font-bold text-blanc'>
            TEAM SCPR <br /> Un petit code change tout!
          </h1>
          <p className='text-[#b0b0b0] mt-[3rem]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{' '}
            Repudiandae rerum laboriosam aliquid non nam mollitia <br /> molestiae.
            Incidunt sed aliquam quos distinctio praesentium,
            tempore laborum, accusantium at, aperiam quae assumenda
            expedita!
          </p>
          <button className='bg-[#fec15f] rounded-lg mt-[2rem] px-5 text-[#333647] font-bold py-2'>Savoir +</button>
        </div>

        <div className=' w-[40rem] h-[28rem] rounded ml-[15vw] mt-[9rem]'>
        <img src='/public/images/about.jpg' className='w-[50vw] h-[58vh] rounded-lg' />
        
        9</div>
        

        <img src='/public/photos_charlie/testimonials-left-dec.png' className='w-[70vw] h-[58vh] absolute opacity-10' />
        <img src='/public/photos_charlie/footer.png' className='w-[70vw] h-[58vh] absolute left-[30%]' />


      </div>
    </div>
  )
}

export default About
