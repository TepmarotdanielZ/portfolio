
import React from 'react'
import logo1 from "../../public/aifarm.png"
import logo2 from "../../public/steam.png"
import logo3 from "../../public/robocon2024.png"
import logo4 from "../../public/chiptree.jpg"
import logo5 from "../../public/cominkhmer1.jpg"
const Experience = () => {
    return (
        <div className='space-y-3'>
            <h2 className='text-xl font-bold'>Work Experience</h2>

            <div className="flex items-center gap-5">
                <img src={logo1} alt="" className='w-14 border 
                rounded-fu'/>
                <div className="flex items-center justify-between flex-1">
                    <div className="flex flex-col">
                        <h3 className='font-semibold'>AI FARM ROBOTICS FACTORY</h3>
                        <span className='font-medium text-gray-500
                        text-sm'>Robotics and Programming Engineer</span>
                    </div>
                    <div className="text-gray-400">December 2022 - Present
                </div>
                
                </div>
            </div>

            <div className="flex items-center gap-5">
                <img src={logo2} alt="" className='w-14 border 
                rounded-fu'/>
                <div className="flex items-center justify-between flex-1">
                    <div className="flex flex-col">
                        <h3 className='font-semibold'>STEAMxLAB</h3>
                        <span className='font-medium text-gray-500
                        text-sm'>Programming and Firmware Development</span>
                    </div>
                    <div className="text-gray-400">January 2022 - Present
                </div>
                
                </div>
            </div>

            <div className="flex items-center gap-5">
                <img src={logo3} alt="" className='w-14 border 
                rounded-fu'/>
                <div className="flex items-center justify-between flex-1">
                    <div className="flex flex-col">
                        <h3 className='font-semibold'>ABU ROBOCON ITC-01 2024</h3>
                        <span className='font-medium text-gray-500
                        text-sm'>Programming and ROS2</span>
                    </div>
                    <div className="text-gray-400">November 2023 – July 2024
                </div>
                
                </div>
            </div>

            <div className="flex items-center gap-5">
                <img src={logo4} alt="" className='w-14 border 
                rounded-fu'/>
                <div className="flex items-center justify-between flex-1">
                    <div className="flex flex-col">
                        <h3 className='font-semibold'>CHIPTREE</h3>
                        <span className='font-medium text-gray-500
                        text-sm'>IoT Engineer</span>
                    </div>
                    <div className="text-gray-400">May - June 2023
                </div>
                
                </div>
            </div>

            <div className="flex items-center gap-5">
                <img src={logo5} alt="" className='w-14 border 
                rounded-fu'/>
                <div className="flex items-center justify-between flex-1">
                    <div className="flex flex-col">
                        <h3 className='font-semibold'>COMINKHMER</h3>
                        <span className='font-medium text-gray-500
                        text-sm'>Elevator and Escalator Internship</span>
                    </div>
                    <div className="text-gray-400">June – September 2022
                </div>
                
                </div>
            </div>


        </div>
    )
}
export default Experience