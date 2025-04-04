import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import HeroBanner from './components/HeroBanner'

function App() {
  return (
    <div className="relative">
      <div className="bg-[#f1f1f1] max-h-[600px] md:mb-24">
        <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<HeroBanner />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App