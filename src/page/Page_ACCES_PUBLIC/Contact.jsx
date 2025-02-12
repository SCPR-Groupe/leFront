import React, { useEffect } from 'react';
import { Phone, MapPin, Mail, Clock, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import functionFade from '../../PurJs/FunctionContactJs';
const Contact = () => {

    useEffect(()=>{
        functionFade('.test', 2000)
       
        functionFade('.test2', 4000)
      

    }, [])          
    return (
        <div className='  px-[9rem] py-8 '>
            <div>
                <h1 className='text-4xl text-center text-blanc'>Connect with Our Team</h1>
            </div>
            <div className='  grid grid-cols-2 gap-16 pt-4  '>
                <div className='col-span-1 p-5'>
                    <form action="" className='bg-[#2a2c3b] px-12 py-6 rounded-md test2 hidden '>
                        <h1 className='text-3xl pb-6 text-jaune text-center'>Get in Touch With Us</h1>
                        <div className='grid grid-cols-2 gap-8'>
                            <input type="text" className='cols-span-1 tailwind-form h-[50px]' placeholder='input your name' />
                            <input type="text" className='cols-span-1 tailwind-form' placeholder='input your email' />
                        </div>
                        <div className='pt-6'>
                            <input type="text" className='cols-span-1 tailwind-form h-[50px]' placeholder='subject' />
                        </div>
                        <div className='pt-6'>
                            <textarea name="" id="" className='tailwind-form h-[12rem]' placeholder='Submit your message request'></textarea>
                        </div>
                        <div className='pt-5'>
                            <button className=' bg-jaune px-6 py-3 rounded-md text-sombre font-semibold'>Send message</button>
                        </div>
                    </form>
                </div>
                <div className='col-span-1 pt-9 test2 hidden'>
                    <div>
                        <h1 className='text-3xl pb-6 text-jaune '>Contact Details</h1>
                        <p className='text-blanc'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugiat corrupti ab recusandae maxime sequi voluptate cumque veritatis aperiam harum !
                        </p>
                    </div>
                    <div className='grid grid-rows-2 gap-8 pt-6 '>
                        <div className='row-span-1 grid grid-cols-2 gap-10 '>
                            <div className='col-span-1 bg-[#2a2c3b] shadow-sm rounded-lg grid grid-cols-3 gap-3 p-4 flex items-center'>
                                <div className='bg-blanc  col-span-1 rounded-lg flex items-center justify-center p-3'>
                                    <MapPin className='text-jaune' size={34} />
                                </div>
                                <div className='col-span-2 text-blanc'>
                                    <h1 className='text-jaune'>Address</h1>
                                    <p>Isaha lot 1455/45P</p>
                                </div>
                            </div>
                            <div className='col-span-1 bg-[#2a2c3b] shadow-sm rounded-lg grid grid-cols-3 gap-3 p-4 flex items-center'>
                                <div className='bg-blanc  col-span-1 rounded-lg flex items-center justify-center p-3'>
                                    <Phone className='text-jaune' size={34} />
                                </div>
                                <div className='col-span-2 text-blanc'>
                                    <h1 className='text-jaune'>Mobil</h1>
                                    <p> +(261) 343331134</p>
                                </div>
                            </div>
                        </div>
                        <div className='row-span-1 grid grid-cols-2 gap-10 '>
                            <div className='col-span-1 bg-[#2a2c3b] shadow-sm rounded-lg grid grid-cols-3 gap-3 p-4 flex items-center'>
                                <div className='bg-blanc  col-span-1 rounded-lg flex items-center justify-center p-3'>
                                    <Clock className='text-jaune' size={34} />
                                </div>
                                <div className='col-span-2 text-blanc'>
                                    <h1 className='text-jaune'>Availability</h1>
                                    <p>Daily 09 am - 05 pm</p>
                                </div>
                            </div>
                            <div className='col-span-1 bg-[#2a2c3b] shadow-sm rounded-lg grid grid-cols-3 gap-3 p-4 flex items-center'>
                                <div className='bg-blanc  col-span-1 rounded-lg flex items-center justify-center p-3'>
                                    <Mail className='text-jaune' size={34} />
                                </div>
                                <div className='col-span-2 text-blanc'>
                                    <h1 className='text-jaune'>Email</h1>
                                    <p>ruffirafano@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between  pt-12'>
                        <div>
                            <h1 className='text-blanc'>Social Media :</h1>
                        </div>
                        <div className='flex gap-2'>
                            <div className='bg-blanc p-1 rounded-md cursor-pointer'>
                                <Facebook className='text-jaune bg-blanc ' size={20} />
                            </div>
                            <div className='bg-blanc p-1 rounded-md cursor-pointer'>
                                <Linkedin className='text-jaune bg-blanc ' size={20} />
                            </div>
                            <div className='bg-blanc p-1 rounded-md cursor-pointer'>
                                <Twitter className='text-jaune bg-blanc ' size={20} />
                            </div>
                            <div className='bg-blanc p-1 rounded-md cursor-pointer'>
                                <Instagram className='text-jaune bg-blanc ' size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;