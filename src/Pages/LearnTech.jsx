import React from 'react';
import img1 from '../Assets/learnVarityTech/Screenshot (398).png'
import img2 from '../Assets/learnVarityTech/Screenshot (399).png'
import img3 from '../Assets/learnVarityTech/Screenshot (400).png'
import img4 from '../Assets/learnVarityTech/Screenshot (401).png'

const LearnTech = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-3xl font-bold my-4 text-green-300'>Details about Hungry Chef.</h1>
            <div>
                <div className='grid grid-cols-2 gap-2 mb-2'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold mt-6 mb-1'>Technologies I use.</h1>
                    <p className='btn btn-sm disabled ml-1 mb-1'>React.js</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'> Html</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'> Tailwind</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'> Daisy Ui</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'>MongoDB CRUD</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'>Firebase</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'> Express.js</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'> Node.js</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mt-6 mb-1'>Features</h1>
                    <ul>
                        <li>1. Here users can select Our favorite course and learn it.</li>
                        <li>2. All courses and other data are stored in the MongoDB database.</li>
                        <li>3. Users can get premium access only after login or signup.</li>
                        <li>4. Users can login using google or github.</li>
                        <li>5. Implement login or signup using firebase.</li>
                    </ul>
                </div>
                <div className='grid grid-cols-2 justify-between gap-2 mb-2'>
                    <a className='btn btn-xs btn-outline btn-info w-full' target='/' href="https://github.com/MasudHasam/-b610-learning-platform-client-side-MasudHasam">Front-End Github</a>
                    <a className='btn btn-xs btn-outline btn-info w-full' target='/' href="https://github.com/MasudHasam/b610-lerning-platform-server-side-MasudHasam">Back-End Github</a>
                </div>
                <a className='btn btn-xs btn-outline w-full' target='/' href="https://b610-learning-platform-bfe6b.web.app/home">Live Site</a>
            </div>
        </div>
    );
};

export default LearnTech;