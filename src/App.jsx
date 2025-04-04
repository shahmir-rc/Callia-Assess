import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import HeroBanner from './components/HeroBanner'

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Routes>
          <Route path="/" element={<HeroBanner />} />
        </Routes>
      </main>
    </>
  )
}

export default App