// import { Lock, Mail, Save } from "lucide-react";
import { useEffect } from "react";
// import $ from "jquery";
import { Facebook, Github, Linkedin, User, Warehouse } from 'lucide-react'   
import functionFade from "../../PurJs/FunctionContactJs";

const Accueil = () => {
 
  useEffect(() => {


    functionFade('.qkory', 4000)


}, [])

  return (

   <>
   <div style={{background:"URL(font.png)",backgroundSize:"cover"}} className="akory w-[100%] h-[83vh] ml-[0vw] mt-[2vh] overflow-hidden">
    <div className="rounded-full w-[10rem] h-[10rem] absolute bg-jaune mt-[60vh]"></div>
        <div className="w-[80%] h-[80vh] ml-[10vw] mt-[2vh]">
          <div className="mt-[15vh] ml-10">
            <p className='text-jaune mt-[-4vh] text-[1.5rem]'>Bienvenue</p>
            <p className='text-white text-[2.8rem]'>P L A T F O  R M</p>
            <p className='text-jaune mt-[-2vh] text-[2.7rem]'>S C P R</p>
            <p className='text-gray-600 text-[0.9rem] w-[35rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nobis illo perspiciatis ipsam. Hic reprehenderit omnis aspernatur eaque libero pariatur provident error fugit, eveniet accusantium, dignissimos magnam reiciendis recusandae neque?  </p>
            <div className='cursor-pointer mt-6'>
              <div className='bg-white ml-3 rounded w-[9rem] h-[2rem]'></div>
              <div className='bg-jaune mt-[-4vh] text-[0.9rem]  w-[10.5rem] px-4 text-white items-center flex shadow-2xl shadow-jtext-jaune rounded h-[2rem] justify-center'>
                <User /> Voir details
              </div>
            </div>
            <div className='icon flex mt-10'>
              <a href='https://www.facebook.com/felix.brayannsrbd' className='flex align-items-center justify-center shadow-jaune shadow-2xl w-10 h-10 rounded-full cursor-pointer bas'>
                <Facebook size={20} className='text-jaune' />
              </a>
              <a className='flex align-items-center justify-center shadow-jaune shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas1'>
                <Github size={20} className='text-jaune' />
              </a>
              <a className='flex align-items-center justify-center shadow-jaune shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas2'>
                <Linkedin size={20} className='text-jaune' />
              </a>
              <a className='flex align-items-center justify-center shadow-jaune shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas3'>
                <Warehouse size={20} className='text-jaune' />
              </a>
            </div>

            <div id='chifre' className="bas1 mt-3">
         
          </div>

          </div>
        </div>
   </div>
   </>
  );
};

export default Accueil;
