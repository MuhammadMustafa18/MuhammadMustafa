import ab from '../assets/about.jpg'
import {ABOUT_TEXT} from '../constants/index'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-4">
        <h2 className="my-20 text-center text-4xl">About
            <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className ="rounded-2xl" src={ab} alt="" />
                    
                            
                    </div>
                </div>
                <div className="w-full lg:w-1/2 pl-8 ">
                <div className='flex justify-center lg:justify-start'>
                    <p className='py-6 max-w-xl'>{ABOUT_TEXT}</p>

                </div>
            </div>
            </div>
             
        </div>
    
  )
}

export default About