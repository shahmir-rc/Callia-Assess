import heroBannerImage from '../assets/images/The-Loved-Lifestyle-removebg-preview.png'

export default function HeroBanner() {
  return (
    <div className="relative flex items-center px-5 pt-5 mb-5 md:pt-12  mx-auto max-w-[1280px] w-full bg-[#f1f1f1]">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6  md:gap-12">
        <div className="px-[3px] gap-4 pt-[126px] pb-[40px]">
          <h4 className="text-[1rem] leading-[120%] tracking-[-0.025em] font-medium animate-fade-in opacity-0">Easy ordering, in-season, budget-friendly</h4>
          <h1 className="text-[5rem] leading-[1] my-4 tracking-[-0.025em] font-bold animate-fade-in animation-delay-200 opacity-0">Wedding flowers made easy</h1>
        </div>
        <div className="">
          <img src={heroBannerImage} alt="Hero Banner" className="w-[600px] h-[600px] object-contain absolute top-[-96px] right-0" />
          <div className="w-[300px] h-[380px] border-2 border-white relative rounded-tl-[20px] rounded-tr-[20px] ml-[160px] mt-[15px] flex items-end p-2">
            <div className="w-full h-[100px] px-3 backdrop-blur-sm bg-white/20 shadow-lg">
              <h3 className=" text-[12.5px] font-bold">Florals that arrive as pictured online</h3>
              <h4 className="text-[10px] leading-[1]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem possimus, tenetur.</h4>
              <div className="flex flex-1 justify-center">
                <button class="items-center ease-out duration-150 justify-center text-[10px] text-white border-2 border-[#0a9ea5] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-[#0a9ea5] hover:bg-white hover:text-[#0a9ea5] h-[30px] w-[90px] my-2 mx-auto">Get Quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}