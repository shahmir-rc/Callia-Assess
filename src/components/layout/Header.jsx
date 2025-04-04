import { Link } from 'react-router-dom'
import { ROUTES } from '../../lib/constants'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to={ROUTES.HOME} className="text-2xl font-light">
            Callia
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to={ROUTES.GALLERY} className="text-gray-600 hover:text-gray-900">
              Gallery
            </Link>
            <Link to={ROUTES.PLANNING} className="text-gray-600 hover:text-gray-900">
              Planning
            </Link>
            <Link 
              to={ROUTES.PLANNING} 
              className="px-6 py-2 bg-beige text-white rounded-full hover:bg-beige-dark transition-colors"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}