import React from 'react';
import img1 from '../Assets/giveandtake/Screenshot (388).png'
import img2 from '../Assets/giveandtake/Screenshot (389).png'
import img3 from '../Assets/giveandtake/Screenshot (390).png'
import img4 from '../Assets/giveandtake/Screenshot (391).png'

const GiveTake = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-3xl font-bold my-4 text-green-300'>Details about Give & Take.</h1>
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
                    <p className='btn btn-sm disabled ml-1 mb-1'> Tailwind</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'> Firebase</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'> Env variable</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'>MongoDB CRUD</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'>JWT Token</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'> Express.js</p>
                    <p className='btn btn-sm disabled ml-1 mb-1'> Node.js</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mt-6 mb-1'>Features</h1>
                    <ul>
                        <li>1.Use an admin dashboard panel to manipulate the user's profile and data. Only the admin can access it.</li>
                        <li>2.Users have two roles. buyer-seller.Buyer can only purchase products but the seller can both.</li>
                        <li>3.Sellers can advertise their product on the website's home page if they want.</li>
                        <li>4.Sellers can add new product or also can delete his or her products</li>
                        <li>5.Admin can make a seller verified.</li>
                    </ul>
                </div>
                <div className='grid grid-cols-2 justify-between gap-2 mb-2'>
                    <a className='btn btn-xs btn-outline btn-info w-full' target='/' href="https://github.com/MasudHasam/-b612-used-products-resale-clients-side-MasudHasam">Front-End Github</a>
                    <a className='btn btn-xs btn-outline btn-info w-full' target='/' href="https://github.com/MasudHasam/-b612-used-products-resale-server-side-MasudHasam">Back-End Github</a>
                </div>
                <a className='btn btn-xs btn-outline w-full' target='/' href="https://give-and-take-a4fb7.web.app/">Live Site</a>
            </div>
        </div>
    );
};

export default GiveTake;