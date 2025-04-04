import { ArrowRight } from 'lucide-react'

export default function HeroBanner() {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Left side with text */}
      <div className="w-full lg:w-1/2 px-6 lg:px-16 xl:px-24 z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            Wedding Flowers
            <span className="block mt-2 font-normal">Made Simple</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Beautiful wedding flowers delivered to your door. Design your dream wedding with our expert florists and hassle-free service.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="px-8 py-4 bg-[#D4B69C] text-white text-lg font-medium rounded-full hover:bg-[#C5A088] transition-colors duration-300 flex items-center gap-2"
            >
              Start Planning
              <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-lg font-medium text-gray-900 hover:text-[#D4B69C] transition-colors duration-300"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Right side with image */}
      <div className="absolute lg:relative lg:w-1/2 h-full lg:h-[90vh] inset-0 lg:inset-auto">
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Wedding bouquet"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 lg:hidden"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-6 lg:left-16 xl:left-24 z-20 hidden lg:block">
        <div className="flex items-center gap-4">
          <div className="w-20 h-[1px] bg-gray-300"></div>
          <span className="text-sm text-gray-500 uppercase tracking-wider">Trusted by 1000+ couples</span>
        </div>
      </div>
    </div>
  )
}