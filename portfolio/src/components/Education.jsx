
import React from 'react'
import image1 from "../../public/itc.jpg"
import image2 from "../../public/etec.png"
import image3 from "../../public/svr2.png"
const Education = () => {
    return (
         <div className='space-y-3' id="education">
                    <h2 className='text-xl font-bold'>Education</h2>
        
                    <div className="flex items-center gap-5">
                        <img src={image1} alt="" className='w-14 border 
                        rounded-fu'/>
                        <div className="flex items-center justify-between flex-1">
                            <div className="flex flex-col">
                                <h3 className='font-semibold'>Institute of Technology of Cambodia</h3>
                                <span className='font-medium text-gray-500
                                text-sm'>Electronic and Automation</span>
                            </div>
                            <div className="text-gray-400">2020 - Present
                        </div>
                        
                        </div>
                    </div>
        
                    <div className="flex items-center gap-5">
                        <img src={image2} alt="" className='w-14 border 
                        rounded-fu'/>
                        <div className="flex items-center justify-between flex-1">
                            <div className="flex flex-col">
                                <h3 className='font-semibold'>ETEC Center</h3>
                                <span className='font-medium text-gray-500
                                text-sm'>Computer Science</span>
                            </div>
                            <div className="text-gray-400">May 2021 - August 2024
                        </div>
                        
                        </div>
                    </div>
        
                    <div className="flex items-center gap-5">
                        <img src={image3} alt="" className='w-14 border 
                        rounded-fu'/>
                        <div className="flex items-center justify-between flex-1">
                            <div className="flex flex-col">
                                <h3 className='font-semibold'>Svay Rieng High School</h3>
                                <span className='font-medium text-gray-500
                                text-sm'>Student</span>
                            </div>
                            <div className="text-gray-400">Completed on 2020
                        </div>
                        
                        </div>
                    </div>
        
                </div>
    )
}
export default Education