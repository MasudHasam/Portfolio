import React from 'react';
import masud from '../Assets/masud.png'
import giveTake from '../Assets/giveandtake.png';
import hungryshef from '../Assets/hungryshef.png';
import learnTech from '../Assets/learnTech.png'
import contact from '../Assets/eye.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <div data-aos="zoom-in" data-aos-duration="2000" style={{ backgroundImage: `url('https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png')` }}>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div>
                        <img className=' w-96 border border-none h-96  shadow-2xl' src={masud} alt="" />
                    </div>
                    <div className='px-5 lg:pr-10 mb-2'>
                        <h1 className='font-bold text-5xl italic text-orange-300'>Hi, This is</h1>
                        <h1 className='font-bold text-5xl text-orange-300'>Masud Hasan</h1>
                        <h2 className='font-bold italic text-amber-500 my-3 text-3xl '>MERN stack Developer</h2>

                        <div className='flex flex-col lg:flex-row gap-1 justify-between items-center'>
                            <div className='btn btn-outline btn-warning text-extrabold'>
                                <a className='flex  justify-center items-center' target='/' href="https://drive.google.com/file/d/1vbdVKbJDcPhxGWW_5oKFP7gXy7ZxzC-Z/view?usp=sharing">
                                    <img className='w-10 h-10' src={contact} alt="" />
                                    <p>Download Resumee</p>
                                </a>
                            </div>
                            <a href='https://form.jotform.com/223442425266049'><button className='btn btn-outline btn-warning text-extrabold'>Contact Me</button></a>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-green-400 h-5 mb-16'>
            </div>

            <div>
                <div className='bg-orange-400 h-1 '>
                </div>
                <div data-aos="flip-right" data-aos-duration="2000" >
                    <h1 className='font-semibold text-white italic text-center'>About Me</h1>
                </div>
                <div className='bg-orange-400 h-1 '>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                    <p>This is Masud Hasan and I  have been  working  as a front-end web  developer for the past 6 months with these flowing technology: HTML, CSS, bootstrap,   tailwind,  javascript, react.js, node.js, express.js, firebase authentication and hosting, and MongoDB database.I'm An industrious person with an aptitude for creating elegant resolutions in the least amount of time. With a
                        proven capability to adjust to both won-starting and collaborative environments while staying attentive to
                        achieving high-quality outcomes under strict deadlines. Eager to get a challenging position at a reputable
                        company that will enlarge my learning and enhances my developer skills</p>
                </div>
            </div>

            <div className='mt-10 mb-16' >
                {/* <div className='bg-orange-400 h-1 '>
                </div> */}
                <div data-aos="flip-right" data-aos-duration="2000">
                    <h1 className='font-semibold text-white italic text-center'>Professional Skills</h1>
                </div>
                <div className='bg-orange-400 h-1 '>
                </div>
                <div className='bg-white h-1 '>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-9 gap-3 justify-center mt-4'>
                    <div data-aos="zoom-in-right" data-aos-duration="2000" className="card rounded-md w-32">
                        <figure><img className='h-20 w-32' src="https://blog.logrocket.com/wp-content/uploads/2020/12/javascript-custom-events.png" alt="JavaScript" /></figure>
                    </div>
                    <div data-aos="zoom-in-right" data-aos-duration="2100" className="card rounded-md w-32">
                        <figure><img className='h-20 w-32' src="https://www.logixshapers.com/BlogImages/Pros%20and%20Cons%20of%20React%20JS%20and%20React%20Native.png" alt="JavaScript" /></figure>
                    </div>
                    <div data-aos="zoom-in-right" data-aos-duration="2200" className="card rounded-md w-32">
                        <figure><img className='h-20 w-32' src="https://www.startechup.com/wp-content/uploads/January-11-2021-Nodejs-What-it-is-used-for-and-when-where-to-use-it-for-your-enterprise-app-development.jpg" alt="JavaScript" /></figure>
                    </div>
                    <div data-aos="zoom-in-right" data-aos-duration="2300" className="card rounded-md w-32">
                        <figure><img className='h-20 w-32' src="https://expressjs.com/images/express-facebook-share.png" alt="JavaScript" /></figure>
                    </div>
                    <div data-aos="zoom-in-right" data-aos-duration="2400" className="card rounded-md w-32">
                        <figure><img className='h-20 w-32' src="https://www.turing.com/blog/wp-content/uploads/2022/02/Mongo-DB-Features.jpg" alt="JavaScript" /></figure>
                    </div>
                    <div data-aos="zoom-in-right" data-aos-duration="2500" className="card rounded-md w-32">
                        <figure><img className='h-20 w-32' src="https://www.computerhope.com/jargon/h/html-head.jpg" alt="JavaScript" /></figure>
                    </div>
                    <div data-aos="zoom-in-right" data-aos-duration="2600" className="card rounded-md w-32">
                        <figure><img className='h-20 w-32' src="https://giuseart.com/wp-content/uploads/2018/07/18101486-css-m%C3%A3-3d-%C4%91%E1%BB%8F.jpg" alt="JavaScript" /></figure>
                    </div>
                    <div data-aos="zoom-in-right" data-aos-duration="2700" className="card rounded-md w-32">
                        <figure><img className='h-20 w-32' src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-social.png" alt="JavaScript" /></figure>
                    </div>
                    <div data-aos="zoom-in-right" data-aos-duration="2800" className="card rounded-md w-32">
                        <figure><img className='h-20 w-32' src="https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg" alt="JavaScript" /></figure>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500">
                {/* <div className='bg-orange-400 h-1 '>
                </div> */}
                <div>
                    <h1 className='font-semibold text-white italic text-center'>Projects</h1>
                </div>
                <div className='bg-orange-400 h-1 '>
                </div>
                <div className='bg-green-400 h-1 mb-8'>
                </div>

                <div className='mb-3' data-aos="fade-right" data-aos-duration="2000">
                    <div className="">
                        <div className=" flex flex-col md:flex-row-reverse lg:justify-between">
                            <img src={giveTake} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                            <div className='my-4'>
                                <h1 className="text-5xl font-bold">Give & Take</h1>
                                <p className="py-4">This site is about used products buy and sell.</p>
                                <button className="btn btn-outline btn-info">Visite Here</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-3' data-aos="fade-right" data-aos-duration="2000">
                    <div className="">
                        <div className=" flex flex-col md:flex-row-reverse lg:justify-between">
                            <img src={hungryshef} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                            <div className='my-4'>
                                <h1 className="text-5xl font-bold">Hungry Shef</h1>
                                <p className="py-4">This is a cloud food website. Here you can order your custom food.</p>
                                <button className="btn btn-outline btn-info">Visite Here</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-3' data-aos="fade-right" data-aos-duration="2000">
                    <div className="">
                        <div className=" flex flex-col md:flex-row-reverse lg:justify-between">
                            <img src={learnTech} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                            <div className='my-4'>
                                <h1 className="text-5xl font-bold">Learn Varity Tech</h1>
                                <p className="py-4">Here you can learn your favorite technology. just choose and learn.</p>
                                <button className="btn btn-outline btn-info">Visite Here</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;