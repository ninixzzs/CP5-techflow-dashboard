import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'

export default function App() {
 return (
   <BrowserRouter>
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
      </main>
      <Footer />
      </div>
      </BrowserRouter>
    )
  }