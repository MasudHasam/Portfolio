import React from 'react';
import img1 from '../Assets/hungryshef/Screenshot (392).png'
import img2 from '../Assets/hungryshef/Screenshot (393).png'
import img3 from '../Assets/hungryshef/Screenshot (394).png'
import img4 from '../Assets/hungryshef/Screenshot (395).png'

const HungryShef = () => {
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
                        <li>1. Firebase Authentication. Users can log in or Sign up using a google account or email password.</li>
                        <li>2. MongoDB Database. All data is stored in an external database.</li>
                        <li>3. CRUD Operation. Users can add, delete or update their data.</li>
                        <li>4. People can add there favorite food.</li>
                        <li>5. Added food being showed on home page.</li>
                    </ul>
                </div>
                <div className='grid grid-cols-2 justify-between gap-2 mb-2'>
                    <a className='btn btn-xs btn-outline btn-info w-full' target='/' href="https://github.com/MasudHasam/b6a11-service-review-client-side-MasudHasam">Front-End Github</a>
                    <a className='btn btn-xs btn-outline btn-info w-full' target='/' href="https://github.com/MasudHasam/b6a11-service-review-server-side-MasudHasam">Back-End Github</a>
                </div>
                <a className='btn btn-xs btn-outline w-full' target='/' href="https://hungry-chef-6caef.web.app/">Live Site</a>
            </div>
        </div>
    );
};

export default HungryShef;