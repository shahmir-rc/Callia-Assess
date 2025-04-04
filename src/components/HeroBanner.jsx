import heroBannerImage from '../assets/images/The-Loved-Lifestyle-removebg-preview.png'

export default function HeroBanner() {
  return (
    <div className="relative flex items-center px-5 pt-5 mb-5 md:pt-12  mx-auto max-w-[1280px] w-full bg-[#f1f1f1]">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6  md:gap-12">
        <div className="px-[3px] gap-4 pt-[126px] pb-[40px]">
          <h4 className="text-[1rem] leading-[120%] tracking-[-0.025em] font-medium">Easy ordering, in-season, budget-friendly</h4>
          <h1 className="text-[5rem] leading-[1] my-4 tracking-[-0.025em] font-bold">Wedding flowers made easy</h1>
        </div>
        <div className="">
          <img src={heroBannerImage} alt="Hero Banner" className="w-[600px] h-[600px] object-contain absolute top-[-96px] right-0" />
        </div>
      </section>
    </div>
  )
}