import { Link } from 'react-router-dom'
import { ROUTES } from '../../lib/constants'
import calliaLogo from '../../assets/images/callia-logo.svg'

export default function Header() {
  return (
    <header className="bg-[#f1f1f1] mx-auto max-w-[1280px] w-full">
      <nav className="p-5 md:pt-12 md:pb-[10px] md:px-[10px] flex justify-between md:gap-[10px]">
        <div className="flex items-center justify-between">
          <Link to={ROUTES.HOME} className="flex items-center">
            <img src={calliaLogo} alt="Callia Logo" className="h-[38px] w-full" />
          </Link>
        </div>
      </nav>
    </header>
  )
}