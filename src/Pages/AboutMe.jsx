import React from 'react';
import masud from '../Assets/masud1.png';

const AboutMe = () => {
    return (
        <div className='w-11/12 mx-auto my-8'>
            <h1 className='text-2xl font-semibold text-green-400'>More Details About Myself</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <img src={masud} alt="" />
                <div className='text-end mt-1'>
                    <h1 className='text-4xl font-bold'>Masud Hasan</h1>
                    <div className='mt-2 text-end'>
                        <p className='mb-'>Professional MERN stact developer</p>
                        <p>An industrious person with an aptitude for creating elegant resolutions in the least amount of time. With a proven capability to adjust to both won-starting and collaborative environments while staying attentive to achieving high-quality outcomes under strict deadlines. Eager to get a challenging position at a reputable company that will enlarge my learning and enhances my developer skills.</p>
                        <div>
                            <h1 className='text-xl font-bold mt-6'>Contact</h1>
                            <p>+8801762718911</p>
                            <p>masud.hasan8911@gmail.com</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold mt-6'>Education</h1>
                            <p>B.A Honours</p>
                            <p>Deppertment of english</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold mt-6'>Location</h1>
                            <p>Rangpur city, Bangladesh</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold mt-6'>Socila Media</h1>
                            <a className='text-sky-600' href="https://www.linkedin.com/in/masudhasan11/">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;