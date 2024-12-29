import pp1 from '../assets/mb.jpg'
import pp2 from '../assets/wb.jpg'
const Services = () => {
  return (
    <div className= "border-b  pb-4  border-neutral-900">
        <h1 className="text-4xl text-center m-20 ">Services</h1>
        <div className="grid grid-cols-2 gap-4 justify-center">
            <div className="p-4 rounded-lg">
            <img src={pp1} className="mb-10 w-full object-cover rounded-lg" alt="Image 1" />
            <h2 className="text-xl font-bold">Service 1</h2>
            <p className="text-gray-600">Description of service 1</p>
            </div>
            
            <div className="p-4 rounded-lg">
            <img src={pp2} className="mb-10 w-full object-cover rounded-lg" alt="Image 1" />
            <h2 className="text-xl font-bold">Service 1</h2>
            <p className="text-gray-600">Description of service 1</p>
            </div>
        </div>

     
    </div>
  );
};

export default Services;